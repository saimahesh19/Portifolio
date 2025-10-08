# 🎬 The Mahesh Résumé Experience

> **A highly cinematic, interactive portfolio website** that presents **Marpu Sai Mahesh’s résumé** as a professional, visually stunning short-film experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Tech Stack](https://img.shields.io/badge/Tech-React%20%7C%20TypeScript%20%7C%20GSAP-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 🌟 Features

- 🎞️ **6 Cinematic Scenes** — Opening, Education, Experience, Projects, Certifications, Contact  
- ⚡ **Smooth Animations** — GSAP-powered transitions and particle effects  
- 🎮 **Interactive Navigation** — Progress indicators, keyboard controls  
- 📱 **Responsive Design** — Works seamlessly across desktop, tablet, and mobile  
- 🔗 **Functional Links** — Direct integration with LinkedIn, GitHub, and email  
- 💎 **Modern UI** — Glassmorphism + `shadcn/ui` components  

---

## 🎯 Live Demo

🚀 Experience the cinematic portfolio here:  
👉 **[saimaheshmarpuportifolio.mgx.world](https://saimaheshmarpuportifolio.mgx.world)**

---

## 🛠️ Quick Start

### 🔧 Prerequisites
- Node.js **v18+**
- `pnpm` (recommended) or `npm`

### ⚙️ Installation

#### 1. Clone the repository
```bash
git clone https://github.com/saimahesh19/mahesh-cinematic-portfolio.git
cd mahesh-cinematic-portfolio
```

#### 2. Install dependencies
```bash
pnpm install
# or
npm install
```

#### 3. Start the development server
```bash
pnpm run dev
# or
npm run dev
```

#### 4. Build for production
```bash
pnpm run build
# or
npm run build
```

---

## 🎨 Tech Stack

| Category | Tools |
|-----------|--------|
| **Frontend** | React 18 + TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Animations** | GSAP (GreenSock) |
| **Build Tool** | Vite |
| **Deployment** | Vercel / Netlify Ready |

---

## 📁 Project Structure

```plaintext
src/
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── CinematicScene.tsx    # Reusable scene wrapper
│   └── scenes/               # Individual scene components
│       ├── OpeningScene.tsx
│       ├── EducationScene.tsx
│       ├── ExperienceScene.tsx
│       ├── ProjectsScene.tsx
│       ├── CertificationsScene.tsx
│       └── ContactScene.tsx
├── pages/
│   └── Index.tsx             # Main application
├── lib/
│   └── utils.ts              # Utility functions
└── main.tsx                  # Entry point
```

---

## 🎬 Scenes Overview

### 1. **Opening Scene**
- Cinematic cityscape intro with animated title  
- Professional narration & entrance effects  

### 2. **Education Scene**
- University library setup  
- Displays academic achievements and CGPA  

### 3. **Experience Scene**
- Professional office timeline  
- Highlights current role at *Relevance Labs*  

### 4. **Projects Scene**
- Futuristic tech lab theme  
- Showcases 5 major projects with GitHub links  

### 5. **Certifications Scene**
- Trophy hall environment  
- AWS, Azure, and NPTEL certifications displayed  

### 6. **Contact Scene**
- Modern workspace environment  
- Interactive links to LinkedIn, GitHub & Email  

---

## 🎮 Navigation

| Control | Action |
|----------|---------|
| **Mouse** | Click navigation buttons |
| **Keyboard** | ← → to navigate scenes, Home to restart |
| **Progress Bar** | Displays current scene |

---

## 🔗 Links Integration

- **LinkedIn:** [linkedin.com/in/marpumahesh](https://linkedin.com/in/marpumahesh)  
- **GitHub:** [github.com/saimahesh19](https://github.com/saimahesh19)  
- **Email:** [chintusaimaheshmarpu@gmail.com](mailto:chintusaimaheshmarpu@gmail.com)  
- **Résumé PDF:** Available for download  

---

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
npm i -g vercel
vercel --prod
```

### **Netlify**
```bash
npm run build
# Upload dist/ folder to Netlify
```

### **GitHub Pages**
```bash
npm run build
# Push dist/ contents to gh-pages branch
```

---

## 🎵 Customization

### Adding Background Music
```typescript
// In src/pages/Index.tsx
useEffect(() => {
  const audio = new Audio('/path/to/music.mp3');
  audio.loop = true;
  audio.volume = 0.3;
  audio.play().catch(() => {});
}, []);
```

### Modify Scenes
You can easily customize each scene in `src/components/scenes/` by changing:
- Colors, gradients, and particle effects  
- Animation timings and transitions  
- Layout, camera movements, and content  

---

## 🌐 Browser Support

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  

---

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/amazing-feature`)  
3. Commit your changes (`git commit -m 'Add amazing feature'`)  
4. Push to the branch (`git push origin feature/amazing-feature`)  
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the **MIT License** — see the `LICENSE` file for details.

---

## 👨‍💻 Author

**Marpu Sai Mahesh**  
- LinkedIn: [@marpumahesh](https://linkedin.com/in/marpumahesh)  
- GitHub: [@saimahesh19](https://github.com/saimahesh19)  
- Email: [chintusaimaheshmarpu@gmail.com](mailto:chintusaimaheshmarpu@gmail.com)

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) — For beautiful UI components  
- [GSAP](https://greensock.com/gsap) — For silky smooth animations  
- [Lucide Icons](https://lucide.dev) — For elegant icons  
- [Tailwind CSS](https://tailwindcss.com) — For modern styling  

⭐ **Star this repository** if you liked the concept and want to support!  
