# Sticky Note Widget

A simple and interactive Sticky Note Widget built with HTML, CSS, and JavaScript. This widget allows users to create, edit, delete, and move sticky notes around the screen. It also includes a light/dark mode toggle and a transparent background effect.

## Features

- **Add Notes**: Click the "Add Note" button to create new sticky notes.
- **Edit Notes**: Type directly into the sticky note to modify its content.
- **Delete Notes**: Click the "X" button on each note to delete it.
- **Move Notes**: Drag and drop notes to reposition them on the screen.
- **Light/Dark Mode**: Toggle between light and dark modes with a button.
- **Persistent Storage**: Notes are saved and restored using local storage, so they persist across page reloads.

## Getting Started

To use the Sticky Note Widget, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/sticky-note-widget.git
   cd sticky-note-widget
   ```

2. **Open the HTML File**:
   Open `index.html` in your web browser to view and interact with the Sticky Note Widget.

## File Structure

- `index.html`: The main HTML file containing the widget structure and style links.
- `style.css`: Custom CSS for the widget's appearance and layout.
- `script.js`: JavaScript file that handles note creation, editing, deletion, moving, and mode toggling.

## Customization

You can customize the appearance and behavior of the widget by modifying the following files:

- **`style.css`**: Adjust the CSS styles to change the look and feel of the sticky notes and the overall widget.
- **`script.js`**: Modify the JavaScript to change functionality, such as adding more features or changing how notes are handled.

## Example Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sticky Note Widget</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="widget-container">
        <!-- Content here -->
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## Dependencies

- [Tailwind CSS](https://tailwindcss.com/): Used for styling the widget.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## Contact

For any questions or feedback, please contact me at [your-email@example.com](mailto:your-email@example.com).
