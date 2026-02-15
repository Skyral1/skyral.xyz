# Skyral.xyz 🌐

Bienvenue sur le dépôt source de mon portfolio personnel **[skyral.xyz](https://skyral.xyz)**.
Ce projet est une vitrine de mes compétences en tant qu'étudiant en informatique, passionné par le HomeLab, l'administration système et le développement web.

![Skyral Portfolio Preview](https://github.com/user-attachments/assets/placeholder-image-url)

## 🚀 Fonctionnalités

- **Design Terminal & Moderne** : Une interface sombre inspirée des terminaux Linux, avec un `neofetch` interactif.
- **Multilingue (FR/EN)** : Support complet du Français et de l'Anglais avec détection automatique et menu de changement de langue.
- **Performance & SEO** : Score Lighthouse quasi-parfait (100/100), optimisé pour le référencement et l'accessibilité.
- **Stack Légère** : HTML5 sémantique, CSS3 moderne (Variables, Flexbox, Grid) et Vanilla JS. Aucune dépendance lourde.
- **Mode Sombre** : Thème unique "Cyber Blue" optimisé pour le confort visuel.

## 📂 Structure du Projet

```bash
.
├── assets/             # Ressources statiques (CSS, JS, Images, Fontes)
│   ├── css/
│   │   └── main.css    # Feuille de style unique
│   ├── js/
│   │   └── main.js     # Logique (Menu langue, Easter eggs)
│   └── favicon.svg     # Logo vectoriel
├── fr/
│   └── index.html      # Version Française
├── en/
│   └── index.html      # Version Anglaise
├── index.html          # Redirection automatique (Racine)
└── README.md           # Documentation
```

## 🛠️ Installation & Développement

Pour tester le site en local :

1.  **Cloner le dépôt** :

    ```bash
    git clone https://github.com/Skyral1/skyral.xyz.git
    cd skyral.xyz
    ```

2.  **Lancer un serveur local** (Recommandé pour éviter les problèmes de chemins absolus/relatifs) :
    - Avec Python :
      ```bash
      python3 -m http.server 8000
      ```
    - Avec VS Code : Utiliser l'extension **Live Server**.

3.  Ouvrir `http://localhost:8000` dans votre navigateur.

## ☁️ Déploiement

Ce site est conçu pour être hébergé statiquement (GitHub Pages, Vercel, Netlify, Nginx/Apache).

- **GitHub Pages** : Poussez simplement sur la branche `main`, et activez GitHub Pages dans les paramètres du dépôt (Source: `root`).

## 📄 Licence

Ce projet est sous licence MIT. Sentez-vous libre de vous en inspirer pour votre propre portfolio !

---

_Fait avec ❤️ et du code par [Skyral](https://github.com/Skyral1)._
