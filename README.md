# Skyral.xyz 🌐

Welcome to the source repository of my personal portfolio **[skyral.xyz](https://skyral.xyz)**.
This project showcases my skills as an IT student, passionate about HomeLab, system administration, and web development.

![Skyral Portfolio Preview](https://github.com/user-attachments/assets/placeholder-image-url)

## 🚀 Features

-   **Terminal-inspired Modern Design**: A dark interface inspired by Linux terminals, with an interactive `neofetch`.
-   **Multilingual (FR/EN)**: Full support for French and English with automatic detection and language switcher menu.
-   **Performance & SEO**: Near-perfect Lighthouse score (100/100), optimized for search engines and accessibility.
-   **Lightweight Stack**: Semantic HTML5, modern CSS3 (Variables, Flexbox, Grid), and Vanilla JS. No heavy dependencies.
-   **Dark Mode**: Unique "Cyber Blue" theme optimized for visual comfort.

## 📂 Project Structure

```bash
.
├── assets/             # Static resources (CSS, JS, Images, Fonts)
│   ├── css/
│   │   └── main.css    # Single stylesheet
│   ├── js/
│   │   └── main.js     # Logic (Language menu, Easter eggs)
│   └── favicon.svg     # Vector logo
├── fr/
│   └── index.html      # French version
├── en/
│   └── index.html      # English version
├── index.html          # Auto-redirect (Root)
└── README.md           # Documentation
```

## 🛠️ Installation & Development

To test the site locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Skyral1/skyral.xyz.git
    cd skyral.xyz
    ```

2.  **Start a local server** (Recommended to avoid absolute/relative path issues):
    *   With Python:
        ```bash
        python3 -m http.server 8000
        ```
    *   With VS Code: Use the **Live Server** extension.

3.  Open `http://localhost:8000` in your browser.

## ☁️ Deployment

This site is designed for static hosting (GitHub Pages, Vercel, Netlify, Nginx/Apache).
*   **GitHub Pages**: Simply push to the `main` branch and enable GitHub Pages in repository settings (Source: `root`).

## 📄 License

This project is licensed under the MIT License. Feel free to use it as inspiration for your own portfolio!

---
*Made with ❤️ and code by [Skyral](https://github.com/Skyral1).*