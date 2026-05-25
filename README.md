<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:04342C,100:639922&height=200&section=header&text=Minecraft%20Landing%20Page&fontSize=40&fontColor=ffffff&fontAlignY=38&descAlignY=58&descColor=a8d5a2" />

</div>

<div align="center">

![Three.js](https://img.shields.io/badge/-Three.js-000000?style=flat&logo=threedotjs&logoColor=white)
![GSAP](https://img.shields.io/badge/-GSAP-88CE02?style=flat&logo=greensock&logoColor=black)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![WebGL](https://img.shields.io/badge/-WebGL-990000?style=flat&logo=webgl&logoColor=white)

</div>

---

## 🐝 Sobre o Projeto

Landing page temática do **Minecraft** com uma abelha 3D animada que acompanha o scroll da página. Projeto desenvolvido durante meus primeiros estudos em **Web3D**, explorando renderização 3D no browser com Three.js e animações de scroll com GSAP.

> 🌱 *Este é um dos meus primeiros projetos com Web3D — ainda estou aprendendo e evoluindo!*

---

## ✨ Funcionalidades

- 🐝 **Modelo 3D interativo** — abelha do Minecraft carregada via GLTFLoader com animação própria do modelo
- 📜 **Scroll animado** — a abelha se move pela tela conforme o usuário rola a página, usando GSAP ScrollTrigger
- 🎨 **Estética Minecraft** — fontes customizadas, background e UI no estilo do jogo
- 💡 **Iluminação 3D** — luz ambiente + luz direcional para dar profundidade ao modelo
- 📱 **Responsivo** — adaptado para diferentes tamanhos de tela

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso no projeto |
|-----------|----------------|
| [Three.js](https://threejs.org/) | Renderização 3D no browser via WebGL |
| [GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader) | Carregamento do modelo `.glb` da abelha |
| [GSAP](https://gsap.com/) | Animações fluidas |
| [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Sincronização do movimento 3D com o scroll |
| HTML5 + CSS3 | Estrutura e estilização da página |

---

## 📁 Estrutura do Projeto

```
minecraft-landing-page/
├── assets/
│   ├── bee_minecraft.glb     # Modelo 3D da abelha
│   ├── bg.webp               # Background do Minecraft
│   ├── favicon.svg
│   ├── Minecrafter.Reg.ttf   # Fonte principal
│   └── Minecraft.ttf         # Fonte secundária
├── index.html
├── script.js                 # Lógica Three.js + GSAP
├── style.css
└── README.md
```

---

## 🚀 Como Rodar Localmente

> ⚠️ Por usar `import` ES Modules e carregar arquivos `.glb`, o projeto precisa de um servidor local para funcionar.

**Com VS Code:**
1. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Clique com botão direito no `index.html` → **Open with Live Server**

**Com Node.js:**
```bash
npx serve .
```

**Com Python:**
```bash
python -m http.server 8000
```

---

## 📚 O que aprendi

Este projeto foi minha introdução ao mundo do **Web3D**. Durante o desenvolvimento explorei:

- Como configurar uma **cena, câmera e renderizador** com Three.js
- Importar e exibir **modelos GLTF/GLB** no browser
- Controlar **animações de modelos 3D** com `AnimationMixer`
- Sincronizar objetos 3D com o **scroll da página** via GSAP ScrollTrigger
- Configurar **iluminação 3D** para dar realismo ao modelo

---

## 🔗 Autor

Feito por **Johann Jarmelo** — estudante de Ciências da Computação apaixonado por interfaces criativas.

[![Portfólio](https://img.shields.io/badge/💼_Portfólio-005bc5?style=for-the-badge)](https://jarmeloo.github.io/portifolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/johannjarmelo/)
[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jarmeloo)

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:4a7c3f,100:1a3a1a&height=100&section=footer" />
</div>
