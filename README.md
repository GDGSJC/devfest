# DevFest São José dos Campos 2026

Landing page oficial do DevFest São José dos Campos 2026, evento organizado pelo Google Developer Groups São José dos Campos.

## 🚀 Sobre o Evento

O DevFest é o maior evento de tecnologia da região, com três trilhas simultâneas cobrindo:

- **Web & Frontend**: React, Next.js, Vue.js, Angular, Web Performance, PWAs
- **Mobile & Flutter**: Flutter Avançado, Android Jetpack Compose, Mobile Architecture
- **Cloud & DevOps**: Google Cloud Platform, Kubernetes, Docker, Serverless, AI/ML

## 🎯 Características da Landing Page

- ✅ **Trilhas**: Apresentação das 3 trilhas simultâneas
- ✅ **Palestrantes**: Showcase dos speakers com bio e redes sociais
- ✅ **Voluntários**: Seção para recrutamento de voluntários
- ✅ **Patrocinadores**: Diferentes tiers de patrocínio
- ✅ **Comunidades Parceiras**: Comunidades que apoiam o evento
- ✅ **Local**: Informações do venue com mapa integrado
- ✅ **Ingressos**: Links para compra de ingressos
- ✅ **Redes Sociais**: Links para todas as redes sociais
- ✅ **Responsivo**: Design mobile-first
- ✅ **Performance**: Otimizado para fast loading

## 🛠 Tecnologias

- **React 18**: Framework principal
- **Vite**: Build tool e dev server
- **Lucide React**: Ícones modernos
- **CSS3**: Estilização com variáveis CSS e grid/flexbox
- **Google Maps**: Integração para localização

## 🏃‍♂️ Rodando o Projeto

### Desenvolvimento
```bash
npm install
npm run dev
```

### Build para Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── App.jsx          # Componente principal
├── App.css          # Estilos específicos do App
├── main.jsx         # Ponto de entrada
└── index.css        # Estilos globais

public/
└── images/
    ├── speakers/     # Fotos dos palestrantes
    ├── sponsors/     # Logos dos patrocinadores
    └── communities/  # Logos das comunidades
```

## 🎨 Customização

### Cores do Tema
As cores seguem a identidade visual do Google/GDG:
- **Primary**: #4285f4 (Google Blue)
- **Secondary**: #34a853 (Google Green)
- **Accent**: #fbbc04 (Google Yellow)
- **Danger**: #ea4335 (Google Red)

### Adicionando Conteúdo

#### Palestrantes
Edite o array `speakers` em `src/App.jsx`:
```javascript
const speakers = [
  {
    name: "Nome do Palestrante",
    role: "Cargo",
    company: "Empresa",
    bio: "Biografia...",
    image: "/images/speakers/nome.jpg",
    twitter: "https://twitter.com/handle",
    linkedin: "https://linkedin.com/in/profile"
  }
]
```

#### Patrocinadores
Edite os arrays `diamondSponsors`, `goldSponsors`, `silverSponsors`:
```javascript
const goldSponsors = [
  { name: "Empresa", logo: "/images/sponsors/logo.png" }
]
```

#### Comunidades Parceiras
Edite o array `partnerCommunities`:
```javascript
const partnerCommunities = [
  {
    name: "Nome da Comunidade",
    description: "Descrição...",
    logo: "/images/communities/logo.png",
    website: "https://site.com"
  }
]
```

## 🌐 Deploy

O projeto está configurado para deploy automático no GitHub Pages:
1. Build é gerado na pasta `docs/`
2. GitHub Pages serve a partir da pasta `docs/`
3. Site disponível em: `https://gdgsjc.github.io/devfest/`

## 📧 Contato

- **Email Geral**: contato@gdgsjc.org
- **Patrocínio**: patrocinio@gdgsjc.org
- **Voluntários**: voluntarios@gdgsjc.org

## 📱 Redes Sociais

- [Instagram](https://instagram.com/gdgsjc)
- [Twitter](https://twitter.com/gdgsjc)
- [LinkedIn](https://linkedin.com/company/gdgsjc)
- [GitHub](https://github.com/gdgsjc)

---

Desenvolvido com ❤️ pelo GDG São José dos Campos
