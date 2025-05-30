# Markdown Basics for MakeAWiki

Markdown is a lightweight markup language that makes it easy to format text. MakeAWiki uses Markdown for all content creation. This guide will cover the basic Markdown syntax you'll need to create great-looking wiki pages.

## Headings

Headings are created using hash symbols (#). The number of hash symbols determines the heading level:

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

## Text Formatting

### Bold and Italic

```markdown
**Bold text** or __Bold text__
*Italic text* or _Italic text_
***Bold and italic text***
```

### Strikethrough

```markdown
~~Strikethrough text~~
```

## Lists

### Unordered Lists

```markdown
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3
```

Or you can use asterisks:

```markdown
* Item 1
* Item 2
```

### Ordered Lists

```markdown
1. First item
2. Second item
3. Third item
```

## Links

### Internal Links

To link to another page in your wiki:

```markdown
[Link text](/path/to/page)
```

### External Links

```markdown
[Google](https://www.google.com)
```

## Images

```markdown
![Alt text](/path/to/image.jpg)
```

You can also add a title:

```markdown
![Alt text](/path/to/image.jpg "Image title")
```

## Code

### Inline Code

```markdown
Use `code` in a sentence
```

### Code Blocks

````markdown
```javascript
function hello() {
  console.log("Hello, world!");
}
```
````

## Blockquotes

```markdown
> This is a blockquote
> 
> It can span multiple lines
```

## Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

## Horizontal Rules

```markdown
---
```

or

```markdown
***
```

## Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
```

## Advanced Tips

1. **Escape special characters** using a backslash: \*not italic\*

2. **Line breaks**: End a line with two or more spaces to create a line break.

3. **HTML**: You can use HTML within Markdown if needed:
   ```markdown
   <div class="custom-class">Custom content</div>
   ```

Remember that simplicity is one of Markdown's greatest strengths. By keeping your formatting clean and consistent, you'll create wiki pages that are both easy to read and maintain.
