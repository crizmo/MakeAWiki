# KPMWiki - Wiki Creator with Folder Support

KPMWiki is a flexible markdown-based wiki system built with Node.js, Express, and EJS templates. It provides a clean, responsive user interface with folder structure support, search functionality, and automatic table of contents generation.

## Features

- 📁 **Folder Structure Support**: Organize your content in folders and subfolders
- 🔍 **Search Functionality**: Quickly find content across your wiki
- 📑 **Automatic Table of Contents**: Generated from your markdown headings
- 🎨 **Responsive Design**: Works on desktop and mobile devices
- ✨ **Syntax Highlighting**: Code blocks are beautifully highlighted
- 🌲 **Hierarchical Navigation**: Easily browse through your content structure

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/KPMWiki.git
cd KPMWiki
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node index.js
```

4. Open your browser and visit `http://localhost:3000`

## Adding Content

1. Create markdown files in the `pages` directory
2. Organize files in subdirectories to create a folder structure
3. The homepage is `pages/home.md`
4. Files are accessible via their path, e.g., `pages/folder/page.md` is accessible at `/folder/page`

## Deployment

This project is configured with automated deployment via GitHub Actions and Vercel. For detailed setup instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Quick Setup

1. Fork this repository to your GitHub account
2. Sign up for a Vercel account: https://vercel.com/signup
3. Import your repository from GitHub
4. Configure the following settings:
   - Framework Preset: `Node.js`
   - Build Command: `npm install`
   - Output Directory: `./`
   - Install Command: `npm install`
5. Set up GitHub repository secrets:
   - `VERCEL_TOKEN`: Your Vercel API token
6. Deploy!

### Automated Updates

The wiki is configured with GitHub Actions workflows that:

1. Automatically deploy to Vercel when changes are pushed to the main branch
2. Daily fetch the latest package information from the KPM repository (https://github.com/gingrspacecadet/kpm)
3. Update the contributors list based on GitHub contributions

To test the update scripts locally:

```bash
# Make the setup script executable
chmod +x setup-deployment.sh

# Run the setup script
./setup-deployment.sh
```

### Manual Updates

You can also manually update the package information and contributors:

```bash
# Update package information
npm run update-packages

# Update contributors information
npm run update-contributors

# Update both
npm run update-all
```

## License

This project is open source and available under the [MIT License](LICENSE).