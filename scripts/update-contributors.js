const fs = require('fs');
const path = require('path');
const https = require('https');

// Function to fetch data from GitHub API
async function fetchFromGitHub(url, page = 1) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'KPMWiki-Bot',
        'Authorization': process.env.GITHUB_TOKEN ? `token ${process.env.GITHUB_TOKEN}` : ''
      }
    };

    https.get(`${url}?page=${page}&per_page=100`, options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Function to fetch all pages of a paginated endpoint
async function fetchAllPages(url) {
  let allData = [];
  let page = 1;
  let hasMoreData = true;
  
  while (hasMoreData) {
    const data = await fetchFromGitHub(url, page);
    if (data && data.length > 0) {
      allData = [...allData, ...data];
      page++;
    } else {
      hasMoreData = false;
    }
  }
  
  return allData;
}

// Main function to update contributors
async function updateContributors() {
  console.log('Fetching contributors information...');
  
  try {
    // Fetch contributors from the main repo
    const contributors = await fetchAllPages('https://api.github.com/repos/gingrspacecadet/kpm/contributors');
    
    // Also fetch package maintainers (contributors to individual package directories)
    const packageMaintainers = new Map();
    
    // Fetch repository contents to get package directories
    const repoContents = await fetchFromGitHub('https://api.github.com/repos/gingrspacecadet/kpm/contents/packages');
    
    if (Array.isArray(repoContents)) {
      // Get all package directories
      const packageDirs = repoContents.filter(item => item.type === 'dir');
      
      // For each package, get the contributors
      for (const pkg of packageDirs) {
        try {
          // Use Git commits to identify main contributors to this package
          const commits = await fetchAllPages(`https://api.github.com/repos/gingrspacecadet/kpm/commits?path=packages/${pkg.name}`);
          
          // Map the commit authors and count their contributions
          const authors = commits.reduce((acc, commit) => {
            const author = commit.author ? commit.author.login : null;
            if (author) {
              acc[author] = (acc[author] || 0) + 1;
            }
            return acc;
          }, {});
          
          // Find the main maintainer (person with most commits)
          const mainMaintainer = Object.entries(authors)
            .sort((a, b) => b[1] - a[1])
            .map(([name]) => name)[0];
          
          if (mainMaintainer) {
            if (!packageMaintainers.has(mainMaintainer)) {
              packageMaintainers.set(mainMaintainer, []);
            }
            packageMaintainers.get(mainMaintainer).push(pkg.name);
          }
        } catch (err) {
          console.error(`Error processing package contributors for ${pkg.name}:`, err.message);
        }
      }
    }
    
    // Update the contributors.md file
    await updateContributorsFile(contributors, packageMaintainers);
    
    console.log('Contributors information update completed!');
  } catch (error) {
    console.error('Error updating contributors:', error);
    process.exit(1);
  }
}

// Update the contributors.md file
async function updateContributorsFile(contributors, packageMaintainers) {
  const contributorsFile = path.join(__dirname, '..', 'pages', 'contributors.md');
  
  // Read the existing file to preserve manual changes to the Core Team section
  let existingContent = '';
  if (fs.existsSync(contributorsFile)) {
    existingContent = fs.readFileSync(contributorsFile, 'utf8');
  }
  
  // Keep the Core Team section if it exists
  const coreTeamMatch = existingContent.match(/## Core Team([\s\S]*?)(?=##|$)/);
  let coreTeamSection = '';
  
  if (coreTeamMatch) {
    coreTeamSection = `## Core Team${coreTeamMatch[1]}`;
  } else {
    coreTeamSection = `## Core Team\n\n- **Lead Developer**: [Maintainer Name]\n- **Documentation Lead**: [Documentation Lead Name]\n- **UX Designer**: [Designer Name]\n\n`;
  }
  
  // Generate content for the contributors.md file
  let content = `# Contributors\n\nThis page recognizes all the amazing people who have contributed to the KPM project.\n\n${coreTeamSection}`;
  
  // Add code contributors section
  content += `## Code Contributors\n\nKPM has benefited from the contributions of many developers. Below is an automatically generated list of contributors from our GitHub repository:\n\n`;
  
  // Sort contributors by number of contributions
  contributors.sort((a, b) => b.contributions - a.contributions);
  
  // Add each contributor
  for (const contributor of contributors) {
    content += `- [${contributor.login}](${contributor.html_url}): ${contributor.contributions} contributions\n`;
  }
  
  // Add package maintainers section
  content += `\n## Package Contributors\n\nThese individuals have created and maintained packages for the KPM ecosystem:\n\n`;
  
  // Sort package maintainers alphabetically
  const sortedMaintainers = [...packageMaintainers.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  
  // Add each maintainer and their packages
  for (const [maintainer, packages] of sortedMaintainers) {
    const maintainerUrl = contributors.find(c => c.login === maintainer)?.html_url || `https://github.com/${maintainer}`;
    content += `- [${maintainer}](${maintainerUrl}): ${packages.map(p => `[${p}](/packages/${p})`).join(', ')}\n`;
  }
  
  content += `\n## How to Be Recognized\n\nAll contributors to KPM are automatically recognized in this list. To contribute, please see our [contributing guidelines](/contributing).\n\n---\n\n*This page is automatically updated through our GitHub Action workflow that syncs contributor information from the KPM repository.*`;
  
  // Write the file
  fs.writeFileSync(contributorsFile, content);
  console.log('Contributors.md file updated');
}

// Run the main function
updateContributors().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
