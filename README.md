# 📸 Lightbox Viewer

A simple and responsive image gallery with lightbox functionality built using **HTML**, **CSS**, and **JavaScript**. Clicking any thumbnail opens a full-size version in an overlay with a close button.

---

## 🚀 Features

- ✅ Responsive gallery layout using Flexbox  
- ✅ Lightbox overlay that displays a full-size image  
- ✅ Close button (&times;) to exit the lightbox  
- ✅ Click outside the image to close the lightbox  
- ✅ Clean and modern styling  

---

## 📁 File Structure

project/
├── index.html # Main HTML file
├── styles.css # CSS styling
└── script.js # JavaScript functionality


---

## 🧪 How It Works

- **Gallery Thumbnails**: Three images are displayed using `<img>` tags with the class `.gallery-item`.
- **Lightbox Overlay**: Hidden by default (`display: none`) using the `.lightbox` container.
- **JavaScript Behavior**:
  - When a thumbnail is clicked, the lightbox is shown (`display: flex`) and the `src` of the image is updated by removing `-thumbnail` from the URL.
  - Clicking the `×` button or the overlay background closes the lightbox.

---

## 🖼️ Image Sources

| Thumbnail URL | Full Image URL |
|---------------|----------------|
| https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg | https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg |
| https://cdn.freecodecamp.org/curriculum/labs/storm-thumbnail.jpg     | https://cdn.freecodecamp.org/curriculum/labs/storm.jpg      |
| https://cdn.freecodecamp.org/curriculum/labs/trees-thumbnail.jpg     | https://cdn.freecodecamp.org/curriculum/labs/trees.jpg      |

---

## 💡 Usage

1. Clone or download this project.
2. Open `index.html` in your browser.
3. Click any image to view it in full-size lightbox mode.
4. Click the close button (`×`) or outside the image to exit.

---

## 🔧 Customization Tips

- Add more images by duplicating `<img class="gallery-item" ...>` tags.
- Customize the lightbox style by editing `styles.css`.
- Add transitions or animations for a smoother user experience.

---

## 📷 Live Demo

You can upload this project to GitHub Pages, CodePen, or Netlify to see it live.

---

## 📄 License

This project is open-source and free to use for learning or personal projects.
