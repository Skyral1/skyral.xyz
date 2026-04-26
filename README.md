# Skyral.xyz 🌐

Welcome to the source repository of my personal portfolio **[skyral.xyz](https://skyral.xyz)**.
This project showcases my skills as an IT student, passionate about HomeLab, system administration, and web development.

## 🚀 Features

- **Terminal-inspired Modern Design**: A dark interface inspired by Linux terminals, with an interactive `neofetch`.
- **Multilingual (FR/EN)**: Full support for French and English with automatic detection and language switcher.
- **Performance & SEO**: Near-perfect Lighthouse score (100/100), optimized for search engines and accessibility.
- **Lightweight Stack**: Semantic HTML5, modern CSS3 (Variables, Flexbox, Grid), and Vanilla JS. No heavy dependencies.
- **Dark Mode**: Unique "Cyber Blue" theme optimized for visual comfort.

## 📂 Project Structure

```bash
.
├── public/                  # Website source files
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css     # Single stylesheet
│   │   └── js/
│   │       └── main.js      # Logic (language menu, easter eggs)
│   ├── en/
│   │   └── index.html       # English version
│   ├── fr/
│   │   └── index.html       # French version
│   └── index.html           # Auto-redirect (root)
├── Dockerfile               # nginx:alpine image build
├── docker-compose.yml       # Traefik-compatible stack
├── nginx.conf               # Custom nginx configuration
└── README.md
```

## 🛠️ Local Development

To test the site locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Skyral1/skyral.xyz.git
   cd skyral.xyz
   ```

2. **Start a local server**:
   - With Python:
     ```bash
     python3 -m http.server 8000 --directory public
     ```
   - With VS Code: use the **Live Server** extension.

3. Open `http://localhost:8000` in your browser.

## ☁️ Self-Hosted Deployment (HomeLab)

This site is deployed on a **self-hosted homelab** using Docker, Nginx, Traefik, and Portainer, running on a Proxmox VE server.

### Stack

| Component                 | Role                                          |
| ------------------------- | --------------------------------------------- |
| **Docker + nginx:alpine** | Serves the static files                       |
| **Traefik**               | Reverse proxy + automatic TLS (Let's Encrypt) |
| **Portainer**             | Stack management and auto-deployment          |
| **Cloudflare**            | DNS, CDN, and DDoS protection                 |

### Automatic Deployment (CI/CD)

Every push to `main` triggers an automatic redeployment via a **Portainer webhook** linked to this repository. No manual intervention is required.

```
git push origin main
      ↓
GitHub notifies Portainer (webhook)
      ↓
Portainer pulls latest code + rebuilds Docker image
      ↓
Site live at https://skyral.xyz
```

### Manual Deployment

If you want to self-host this project:

1. Make sure you have Docker, Docker Compose, and Traefik running.
2. Clone this repository on your server.
3. Deploy via Docker Compose:
   ```bash
   docker compose up -d --build
   ```
4. Point your domain to the server and configure Traefik labels in `docker-compose.yml`.

## 📄 License

This project is licensed under the MIT License. Feel free to use it as inspiration for your own portfolio!

---

_Made with ❤️ and code by [Skyral](https://github.com/Skyral1)._
