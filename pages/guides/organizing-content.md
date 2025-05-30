# Organizing Content in MakeAWiki

Well-organized content is key to creating an effective wiki. This guide provides best practices for structuring and organizing your MakeAWiki content.

## Folder Structure Planning

The folder structure of your MakeAWiki directly maps to the URL structure of your wiki. Here are some tips for planning your structure:

### Logical Grouping

Group related content together in the same folder. For example:

```
pages/
  guides/
    beginner-guides/
    advanced-guides/
  reference/
    api/
    configuration/
```

### Naming Conventions

- Use lowercase letters
- Replace spaces with hyphens (e.g., `getting-started.md` instead of `getting started.md`)
- Keep names short but descriptive
- Be consistent with your naming patterns

### Depth vs. Breadth

- **Breadth**: More top-level categories with fewer subcategories
- **Depth**: Fewer top-level categories with more subcategories

Choose based on your content needs, but avoid going too deep (more than 3-4 levels) as it can make navigation difficult.

## Page Organization

### Home Page

Your `home.md` is the entry point to your wiki. It should:

- Introduce your wiki's purpose
- Provide navigation to key sections
- Be regularly updated with important information

### Key Pages to Consider

1. **Getting Started**: Introduction for new users
2. **Reference**: Documentation and technical details
3. **Tutorials**: Step-by-step guides
4. **FAQ**: Frequently asked questions
5. **Glossary**: Definitions of terms used in your wiki

## Navigation Tips

### Internal Linking

Use internal links extensively to connect related content:

```markdown
Learn more about [Markdown Basics](/guides/markdown-basics) to improve your content.
```

### Table of Contents

For longer pages, include a table of contents:

```markdown
## Table of Contents
- [Section 1](#section-1)
- [Section 2](#section-2)
  - [Subsection 2.1](#subsection-21)
- [Section 3](#section-3)
```

### Breadcrumb Navigation

Help users understand where they are in your wiki structure by including breadcrumb navigation at the top of your pages:

```markdown
[Home](/home) > [Guides](/guides) > Organizing Content
```

## Content Maintenance

### Regular Review

Schedule regular reviews of your content to:

- Update outdated information
- Fix broken links
- Improve organization as content grows

### Versioning Strategy

If your wiki documents evolving software or processes, consider a strategy for handling different versions:

- Separate folders for major versions
- Clear version indicators in page titles or metadata
- Archive outdated content

## Special Pages

### Index Pages

Create index pages for each folder that list and describe the contents:

```markdown
# Guides Index

This section contains all guides for using MakeAWiki:

- [Markdown Basics](/guides/markdown-basics) - Learn essential Markdown syntax
- [Organizing Content](/guides/organizing-content) - Best practices for wiki structure
```

### Redirects

For important content that might be accessed via different paths, consider creating redirect pages that point to the canonical location.

## Advanced Organization Tips

### Tags and Categories

Though MakeAWiki doesn't have built-in tagging, you can implement a simple tagging system by:

1. Creating a "Tags" section at the bottom of each page
2. Creating tag index pages that list all content with a specific tag

### Search Optimization

Make your content more searchable by:

- Using clear, descriptive headings
- Including relevant keywords in the first paragraph
- Using consistent terminology

By following these organizational guidelines, you'll create a wiki that's intuitive to navigate and easy to maintain even as it grows over time.
