## Installing MakeAWiki

This guide will walk you through the process of installing MakeAWiki on your server.

### Prerequisites

Before installing MakeAWiki, make sure you have the following:

- **Node.js**: Version 12 or higher
- **npm** or **yarn**: Package manager for Node.js
- **Git**: For cloning the repository (optional)

### Installation Steps

1. Clone the MakeAWiki repository:

```bash
git clone https://github.com/yourusername/MakeAWiki.git
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

4. Open your browser and visit `http://localhost:3000` to access your wiki.

### Creating Your First Content

1. Create markdown files in the `pages` directory
2. Organize files in subdirectories to create a folder structure
3. The homepage is `pages/home.md` (this is what visitors will see first)
4. Files are accessible via their path, e.g., `pages/folder/page.md` is accessible at `/folder/page`

### Project Structure

After installation, your MakeAWiki project will have the following structure:

```
MakeAWiki/
  ├── index.js              # Main application file
  ├── package.json          # Package configuration
  ├── views/                # EJS templates
  ├── static/               # CSS, JavaScript, and other static files
  └── pages/                # Your wiki content (markdown files)
```

### Troubleshooting

If you encounter any issues during installation:

- Make sure your computer is connected to the internet
- Verify that Node.js and npm are properly installed
- Check if you have sufficient storage space (at least 50MB free)
- Check for errors in the terminal output
- Make sure all dependencies are being installed correctly

Common issues:

1. **"Port already in use" error**:
   - Change the port in the index.js file if port 3000 is already being used
   - Or stop the process using that port and restart

2. **Module not found errors**:
   - Try deleting node_modules folder and running `npm install` again

If you continue to have problems, please visit our [Support](/support) page for additional help.
