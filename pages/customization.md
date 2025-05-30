# Customizing Your MakeAWiki

MakeAWiki is designed to be easily customizable to suit your specific needs. This guide will help you understand how to make your wiki look and function exactly the way you want.

## Changing the Look and Feel

### CSS Customization

All styling is contained in CSS files located in the `static` directory:

- `base.css` - Core styles for the wiki
- `sidebar.css` - Styles for the navigation sidebar
- `mobile.css` - Responsive styles for mobile devices

To customize these, simply edit the files directly. For example, to change the primary color:

```css
:root {
  --primary-color: #4a86e8; /* Change this to your desired color */
  --secondary-color: #2c3e50;
  /* other variables */
}
```

### Template Customization

The HTML templates are located in the `views` directory:

- `page.ejs` - Template for wiki pages
- `directory.ejs` - Template for directory listings
- `search.ejs` - Template for search results

You can modify these templates to change the structure or add new elements.

## Branding Your Wiki

### Changing the Wiki Name

To change the wiki name that appears in the header and title bars:

1. Open all `.ejs` files in the `views` directory
2. Replace "MakeAWiki" with your wiki name

### Adding a Logo

To add a logo:

1. Add your logo image to the `static` directory
2. Modify the header section in the `.ejs` templates to include your logo:

```html
<div class="header-title">
  <a href="/">
    <img src="/static/your-logo.png" alt="Your Wiki Name" class="logo">
    Your Wiki Name
  </a>
</div>
```

## Adding Custom Features

### Custom JavaScript

To add custom JavaScript functionality:

1. Create a new JavaScript file in the `static` directory
2. Include it in the `.ejs` templates:

```html
<script src="/static/your-custom-script.js"></script>
```

### Custom Fonts

To use custom fonts:

1. Add the font files to a `fonts` directory within `static`
2. Add the font-face declarations to your CSS:

```css
@font-face {
  font-family: 'YourCustomFont';
  src: url('/static/fonts/your-font.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'YourCustomFont', sans-serif;
}
```

## Advanced Customization

### Server-Side Customization

If you need more advanced customization, you can modify the `index.js` file to add new routes, middleware, or functionality.

### Adding Authentication

You can add authentication to protect your wiki:

1. Install authentication middleware like Passport.js:
   ```bash
   npm install passport passport-local express-session
   ```

2. Integrate it with the Express app in `index.js`

### Creating Custom Plugins

MakeAWiki can be extended with plugins:

1. Create a new directory for your plugin in the project root
2. Implement your plugin's functionality
3. Update `index.js` to load your plugin

## Best Practices

- Make a backup of original files before customizing
- Test changes in development before deploying to production
- Consider using Git branches for experimenting with different customizations
- Document your customizations for future reference

Need more help? Check out the [Contributing Guide](/contributing) for details on the project structure and how to contribute improvements back to the community.
