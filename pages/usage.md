## Basic Usage

MakeAWiki is designed to be easy to use while providing powerful features for organizing and sharing your knowledge. Here's how to use it effectively:

### Creating Content

All content in MakeAWiki is created using Markdown files in the `pages` directory. The folder structure in the `pages` directory directly maps to the URL structure of your wiki.

#### File Structure Example

```
pages/
  home.md                   # Accessible at /
  getting-started.md        # Accessible at /getting-started
  tutorials/                # Directory
    beginner.md             # Accessible at /tutorials/beginner
    advanced.md             # Accessible at /tutorials/advanced
  reference/                # Directory
    api.md                  # Accessible at /reference/api
```

### Markdown Features

MakeAWiki supports standard Markdown syntax plus some additional features:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text** and *italic text*

[Link to another page](/page-name)

![Image alt text](/static/images/example.jpg)

- Bullet point
- Another point
  - Nested point

1. Numbered item
2. Another numbered item

> Blockquote example
```

### Code Syntax Highlighting

MakeAWiki supports syntax highlighting for many programming languages:

```javascript
function sayHello() {
  console.log("Hello, MakeAWiki!");
}
```

### Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

### Customizing Your Wiki

You can customize your MakeAWiki instance by:

1. Modifying the CSS files in the `static` directory
2. Updating the templates in the `views` directory
3. Adding your own static assets (images, fonts, etc.) to the `static` directory

### Navigation

MakeAWiki automatically generates navigation based on your folder structure. The sidebar shows all your pages organized by directory.

### Search

You can use the search bar at the top of each page to find content across your wiki. The search is case-insensitive and works across all pages.

### Getting Help

If you need help with MakeAWiki, check out these resources:

- [Support Page](/support) - Common issues and solutions
- [Customization Guide](/customization) - Detailed customization options
- [GitHub Issues](https://github.com/yourusername/MakeAWiki/issues) - Report bugs or request features

### Keyboard Shortcuts

MakeAWiki includes several keyboard shortcuts to enhance your experience:

| Shortcut | Description |
|---------|-------------|
| `Ctrl + K` or `/` | Focus the search bar |
| `Esc` | Clear search or close dialogs |
| `Alt + →` | Navigate forward in history |
| `Alt + ←` | Navigate back in history |

### Working with Images

To add images to your wiki:

1. Place your image files in the `static/images` directory
2. Reference them in your markdown: `![Alt text](/static/images/your-image.jpg)`

For more advanced usage, check out our [Advanced Configuration](/guides/advanced-configuration) guide.
