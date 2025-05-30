const fs = require('fs');
const path = require('path');
const https = require('https');

// Function to fetch data from GitHub API
async function fetchFromGitHub(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'KPMWiki-Bot',
        'Authorization': process.env.GITHUB_TOKEN ? `token ${process.env.GITHUB_TOKEN}` : ''
      }
    };

    https.get(url, options, (res) => {
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

// Main function to update package information
async function updatePackages() {
  console.log('Fetching latest KPM packages information...');
  
  try {
    // Fetch repository contents
    const repoContents = await fetchFromGitHub('https://api.github.com/repos/gingrspacecadet/kpm/contents/packages');
    
    if (!Array.isArray(repoContents)) {
      throw new Error('Invalid repository content format');
    }
    
    // Get all package directories
    const packageDirs = repoContents.filter(item => item.type === 'dir');
    
    // Keep track of processed packages
    const processedPackages = [];
    
    // Update main packages list
    console.log('Updating main package listing...');
    await updateMainPackagesList(packageDirs);
    
    // Process each package
    for (const pkg of packageDirs) {
      try {
        // Get package metadata (from package.json in the repo)
        const packageJson = await fetchFromGitHub(`https://api.github.com/repos/gingrspacecadet/kpm/contents/packages/${pkg.name}/package.json`);
        const content = Buffer.from(packageJson.content, 'base64').toString('utf8');
        const metadata = JSON.parse(content);
        
        // Update or create package documentation
        await updatePackageDoc(pkg.name, metadata);
        
        processedPackages.push({
          name: pkg.name,
          description: metadata.description || '',
          version: metadata.version || '0.0.0'
        });
        
        console.log(`Updated documentation for ${pkg.name}`);
      } catch (err) {
        console.error(`Error processing package ${pkg.name}:`, err.message);
      }
    }
    
    console.log('Package information update completed!');
    return processedPackages;
  } catch (error) {
    console.error('Error updating packages:', error);
    process.exit(1);
  }
}

// Update the main packages.md file
async function updateMainPackagesList(packages) {
  const packagesDir = path.join(__dirname, '..', 'pages');
  const packagesFile = path.join(packagesDir, 'packages.md');
  
  // Generate content for the packages.md file
  let content = `# KPM Packages\n\nThis page lists all available packages for Kindle Package Manager. The information is automatically updated daily from the [KPM GitHub Repository](https://github.com/gingrspacecadet/kpm).\n\n## Available Packages\n\n`;
  
  // Sort packages alphabetically
  packages.sort((a, b) => a.name.localeCompare(b.name));
  
  // Add each package with link to its dedicated page
  for (const pkg of packages) {
    content += `* [${pkg.name}](/packages/${pkg.name}) - [View on GitHub](https://github.com/gingrspacecadet/kpm/tree/main/packages/${pkg.name})\n`;
  }
  
  content += `\n## How to Install Packages\n\nTo install any of these packages, use the following command on your Kindle:\n\n\`\`\`\nkpm install <package-name>\n\`\`\`\n\nFor more detailed instructions, see our [Installing Packages](/tutorials/installing-packages) guide.\n\n## Contributing Packages\n\nIf you'd like to create and submit your own package to KPM, check out our [Creating Packages](/tutorials/creating-packages) guide.\n\n---\n\n*This page is automatically updated through our GitHub Action workflow that syncs package information from the KPM repository.*`;
  
  // Write the file
  fs.writeFileSync(packagesFile, content);
  console.log('Main packages.md file updated');
}

// Update or create individual package documentation
async function updatePackageDoc(packageName, metadata) {
  const packagesDir = path.join(__dirname, '..', 'pages', 'packages');
  const packageFile = path.join(packagesDir, `${packageName}.md`);
  
  // Ensure the packages directory exists
  if (!fs.existsSync(packagesDir)) {
    fs.mkdirSync(packagesDir, { recursive: true });
  }
  
  // Check if the file already exists
  let existingContent = '';
  if (fs.existsSync(packageFile)) {
    existingContent = fs.readFileSync(packageFile, 'utf8');
  }
  
  // Generate new content
  let content = `# ${packageName}\n\n`;
  
  // Add metadata
  content += `**Version**: ${metadata.version || 'N/A'}\n`;
  content += `**Author**: ${metadata.author || 'Unknown'}\n`;
  content += `**License**: ${metadata.license || 'N/A'}\n\n`;
  
  // Add description
  content += `## Description\n\n${metadata.description || 'No description available.'}\n\n`;
  
  // Add installation instructions
  content += `## Installation\n\nTo install this package, run the following command on your Kindle:\n\n\`\`\`\nkpm install ${packageName}\n\`\`\`\n\n`;
  
  // Add usage information (preserve if it exists)
  const usageMatch = existingContent.match(/## Usage([\s\S]*?)(?=##|$)/);
  if (usageMatch) {
    content += `## Usage${usageMatch[1]}\n\n`;
  } else {
    content += `## Usage\n\n*No usage information available. If you're familiar with this package, consider contributing to this documentation.*\n\n`;
  }
  
  // Add GitHub repository link
  content += `## Source Code\n\nYou can view the source code for this package on [GitHub](https://github.com/gingrspacecadet/kpm/tree/main/packages/${packageName}).\n\n`;
  
  // Add dependencies
  if (metadata.dependencies && Object.keys(metadata.dependencies).length > 0) {
    content += `## Dependencies\n\nThis package requires the following dependencies:\n\n`;
    
    for (const dep in metadata.dependencies) {
      content += `- ${dep}: ${metadata.dependencies[dep]}\n`;
    }
    content += '\n';
  }
  
  content += `---\n\n*This documentation is automatically updated from the package's metadata in the KPM repository.*`;
  
  // Write the file
  fs.writeFileSync(packageFile, content);
}

// Run the main function
updatePackages().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
