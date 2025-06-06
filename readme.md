# MakeAWiki - Simple, Powerful Wiki Creation

MakeAWiki is a flexible markdown-based wiki system built with Node.js, Express, and EJS templates. It allows anyone to create their own customized wiki with a clean, responsive user interface, folder structure support, search functionality, and automatic table of contents generation.

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
git clone https://github.com/crizmo/MakeAWiki.git
cd MakeAWiki
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
   - Build Command: `npm run build`
   - Output Directory: `.`
   - Install Command: `npm install`
6. Deploy!

## License

This project is open source and available under the [MIT License](LICENSE).

---

[<img src="https://img.shields.io/badge/Made_with-MakeAWiki-blue?style=flat-square">](https://make-a-wiki.vercel.app/)