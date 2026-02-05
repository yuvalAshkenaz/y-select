# 🚀 y-select
### **The Lightweight, Accessible & High-Performance Custom Select Component**

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Accessibility](https://img.shields.io/badge/Accessibility-Aria_Compliant-blue?style=for-the-badge&logo=accessible-icon)
![Performance](https://img.shields.io/badge/Performance-CWV_Optimized-green?style=for-the-badge&logo=google-chrome)

---

## 📖 Overview
**y-select** is a modern, pure **Vanilla JS** solution designed to replace native HTML select elements. It provides a highly customizable UI while strictly adhering to accessibility standards and performance metrics. 

Unlike heavy libraries like Select2 or jQuery-based plugins, `y-select` focuses on being "invisible" to the browser's performance scores while being "highly visible" and intuitive for the user.

---

## ✨ Key Features

* **♿ Full Accessibility (ARIA)** Built-in support for `role="combobox"`, `aria-expanded`, and `aria-haspopup`. Fully tested with screen readers.
* **⌨️ Keyboard Navigation** Intuitive control: **Arrow keys** to navigate, **Enter/Space** to select, and **Esc** to close.
* **⚡ Performance Optimized (Core Web Vitals)** - **INP (Interaction to Next Paint):** Non-blocking event loop ensures an instant response.
  - **LCP (Largest Contentful Paint):** Zero external dependencies and inline SVGs for lightning-fast loading.
* **🎨 Generic & Flexible Design** Minimalist, flat CSS architecture. Easily adaptable to any design system without "design debt."
* **🔍 No Dependencies** Pure JavaScript. No jQuery, no bloat.

---

## 🚀 Live Demo
Experience the component's performance and accessibility:  
👉 [**View Live Demo**](https://test.dooble.io/y-select/demo)

---

## 📦 Installation & Usage

### 1. HTML Structure
Simply wrap your native `select` with a `.y-select-wrap` container.

```html
<div class="y-select-wrap">
    <select class="y-select" name="category">
        <option value="">Choose Category</option>
        <option value="tech">Technology</option>
        <option value="finance">Finance</option>
        <option value="legal">Legal Affairs</option>
    </select>
</div>
```

### 2. Styling (CSS)
y-select uses a strict property order to ensure optimal browser rendering and maintainability.

### 3. Initialization (JS)
The script automatically detects and initializes all .y-select elements once the DOM is ready.

### 🛠 Technical Specifications
<table data-path-to-node="9"><thead><tr><td><span data-path-to-node="9,0,0,0">Feature</span></td><td><span data-path-to-node="9,0,1,0">Specification</span></td></tr></thead><tbody><tr><td><span data-path-to-node="9,1,0,0"><b data-path-to-node="9,1,0,0" data-index-in-node="0">Language</b></span></td><td><span data-path-to-node="9,1,1,0">Vanilla JavaScript (ES6+)</span></td></tr><tr><td><span data-path-to-node="9,2,0,0"><b data-path-to-node="9,2,0,0" data-index-in-node="0">Styling</b></span></td><td><span data-path-to-node="9,2,1,0">CSS3 (Flat Naming Convention)</span></td></tr><tr><td><span data-path-to-node="9,3,0,0"><b data-path-to-node="9,3,0,0" data-index-in-node="0">Accessibility</b></span></td><td><span data-path-to-node="9,3,1,0">ARIA 1.2 Compliant</span></td></tr><tr><td><span data-path-to-node="9,4,0,0"><b data-path-to-node="9,4,0,0" data-index-in-node="0">Dependencies</b></span></td><td><span data-path-to-node="9,4,1,0">None (0)</span></td></tr><tr><td><span data-path-to-node="9,5,0,0"><b data-path-to-node="9,5,0,0" data-index-in-node="0">Browser Support</b></span></td><td><span data-path-to-node="9,5,1,0">All Modern Browsers (Chrome, Edge, Safari, Firefox)</span></td></tr></tbody></table>

### 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to fork this project and submit a PR.

### 📝 License
This project is open-source and available under the MIT License.
