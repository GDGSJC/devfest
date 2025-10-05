# 🎨 Paleta de Cores Google Developer

Esta landing page agora usa as cores oficiais do Google Developer Group, baseadas na identidade visual do Google.

## 🌈 Cores Principais

### Cores Google Oficiais
- **Google Blue** (`#4285f4`) - Azul do Google
- **Google Red** (`#ea4335`) - Vermelho do Google  
- **Google Yellow** (`#fbbc04`) - Amarelo do Google
- **Google Green** (`#34a853`) - Verde do Google

### Cores Neutras
- **Dark** (`#202124`) - Texto principal
- **Gray** (`#5f6368`) - Texto secundário
- **Light** (`#f8f9fa`) - Fundo claro
- **White** (`#ffffff`) - Branco puro

## 🎭 Gradientes

### Gradiente Principal
```css
--gradient-bg: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
```
*Usado em botões primários e seções principais*

### Gradiente Header/Hero
```css
--gradient-header: linear-gradient(135deg, #4285f4 0%, #ea4335 50%, #fbbc04 100%);
```
*Usado na seção hero com animação*

### Gradiente CTA
```css
--gradient-cta: linear-gradient(135deg, #ea4335 0%, #fbbc04 100%);
```
*Usado na seção de ingressos*

### Gradiente Multicolor (Logo Style)
```css
--gradient-multicolor: linear-gradient(
  135deg,
  #4285f4 0%,
  #ea4335 25%,
  #fbbc04 50%,
  #34a853 75%,
  #4285f4 100%
);
```
*Usado nos títulos das seções e logo*

## ✨ Animações

### Gradiente Animado
- **gradientMove**: Animação que move os gradientes suavemente
- **Duração**: 6-12 segundos dependendo do elemento
- **Efeito**: Cria um movimento sutil e elegante nos gradientes

## 🎯 Aplicação das Cores

### Trilhas do Evento
- **Trilha 1 (Web)**: Google Blue (`#4285f4`)
- **Trilha 2 (Mobile)**: Google Green (`#34a853`) 
- **Trilha 3 (Cloud)**: Google Red (`#ea4335`)

### Benefícios dos Voluntários
- **Primeiro benefício**: Google Red
- **Segundo benefício**: Google Blue
- **Terceiro benefício**: Google Green

### Seções com Gradientes Animados
- **Hero Section**: Gradiente Header
- **Títulos das Seções**: Gradiente Multicolor
- **Logo/Brand**: Gradiente Multicolor
- **CTA Ingressos**: Gradiente CTA

## 🛠 Como Customizar

Para alterar as cores, edite as variáveis CSS em `/src/index.css`:

```css
:root {
  --google-blue: #4285f4;
  --google-red: #ea4335;
  --google-yellow: #fbbc04;
  --google-green: #34a853;
}
```

## 📱 Responsividade

Todas as cores e gradientes são otimizados para:
- **Desktop**: Gradientes com animação completa
- **Mobile**: Gradientes adaptados para performance
- **Dark Mode**: Preparado para implementação futura

---

*Baseado na identidade visual oficial do Google Developer Groups*