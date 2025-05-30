## Contributing to MakeAWiki

We welcome contributions to MakeAWiki! This page outlines how you can help make MakeAWiki even better.

### Ways to Contribute

There are many ways to contribute to MakeAWiki:

1. **Code Contributions**: Help improve the MakeAWiki codebase
2. **Documentation**: Help improve or translate the documentation
3. **Theme Creation**: Create and share custom themes
4. **Bug Reports**: Report issues you encounter
5. **Feature Requests**: Suggest new features or improvements
6. **Community Support**: Help other users in the forums or chat

### Development Setup

To set up a development environment for MakeAWiki:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/MakeAWiki.git
   cd MakeAWiki
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

### Pull Request Workflow

1. Fork the repository on GitHub
2. Create a new branch for your feature or bugfix
3. Make your changes and commit them
4. Push your branch to your fork
5. Create a pull request from your branch to the main repository

### Contributing Features

To add a new feature to MakeAWiki:

1. Decide what type of feature you want to add
   ```bash
   # Example: Adding a new theme
   mkdir -p static/themes/my-theme
   ```

2. Create the necessary files for your feature
   - CSS files for themes
   - JavaScript for new functionality
   - EJS template modifications if needed

3. Document your changes in the appropriate guide:
   ```bash
   touch pages/guides/my-feature-guide.md
   ```

6. Submit a pull request with your changes

### Coding Standards

- Use 4 spaces for indentation
- Follow the existing code style
- Add comments for complex logic
- Write tests for new features
- Update documentation for user-facing changes

### Documentation Contributions

The MakeAWiki documentation is written in Markdown and stored in the `pages` directory. To contribute:

1. Edit the appropriate Markdown files
2. Preview your changes by running the MakeAWiki server locally
3. Submit a pull request with your changes

### Creating and Maintaining Themes

If you're interested in creating or maintaining themes:

1. Follow the [Custom Themes](/tutorials/custom-themes) guide
2. Test your themes thoroughly across different devices
3. Submit them to the official MakeAWiki repository or share them with the community

### Community Guidelines

- Be respectful and kind to other contributors
- Provide constructive feedback
- Help newcomers get started
- Follow the code of conduct

### Recognition

All contributors are recognized on our [Contributors page](/contributors) and on the GitHub repository. We appreciate every contribution, no matter how small!