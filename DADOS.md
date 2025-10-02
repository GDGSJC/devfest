# 📋 Guia de Gerenciamento de Dados JSON

Este projeto agora utiliza arquivos JSON separados para gerenciar todo o conteúdo dinâmico da landing page do DevFest. Isso facilita a manutenção e atualização dos dados sem precisar mexer no código React.

## 📁 Estrutura dos Arquivos JSON

```
src/data/
├── speakers.json       # Dados dos palestrantes
├── sponsors.json       # Patrocinadores por categoria
├── communities.json    # Comunidades parceiras
├── volunteers.json     # Informações sobre voluntários
└── organizers.json     # Equipe organizadora e contatos
```

## 🎤 speakers.json

Contém informações detalhadas dos palestrantes:

```json
{
  "speakers": [
    {
      "id": 1,
      "name": "Nome do Palestrante",
      "role": "Cargo",
      "company": "Empresa",
      "bio": "Biografia detalhada...",
      "image": "/images/speakers/nome.jpg",
      "track": "web|mobile|cloud",
      "social": {
        "twitter": "https://twitter.com/handle",
        "linkedin": "https://linkedin.com/in/profile",
        "github": "https://github.com/username"
      },
      "talk": {
        "title": "Título da Palestra",
        "description": "Descrição da palestra...",
        "time": "14:30",
        "duration": "45min"
      }
    }
  ]
}
```

### Como adicionar um novo palestrante:
1. Abra `src/data/speakers.json`
2. Adicione um novo objeto no array `speakers`
3. Incremente o `id`
4. Adicione a foto em `public/images/speakers/`

## 💼 sponsors.json

Organiza patrocinadores por categoria (diamond, gold, silver):

```json
{
  "sponsors": {
    "diamond": [...],
    "gold": [...],
    "silver": [...]
  },
  "sponsorshipTiers": {
    "diamond": {
      "name": "Patrocinador Diamante",
      "price": "R$ 25.000",
      "benefits": [...]
    }
  }
}
```

### Como adicionar um patrocinador:
1. Escolha a categoria (diamond/gold/silver)
2. Adicione o logo em `public/images/sponsors/`
3. Adicione o objeto no array correspondente

## 🤝 communities.json

Dados das comunidades parceiras:

```json
{
  "partnerCommunities": [
    {
      "id": 1,
      "name": "Nome da Comunidade",
      "description": "Descrição...",
      "logo": "/images/communities/logo.png",
      "members": 2500,
      "founded": "2019",
      "location": "São Paulo, SP",
      "social": {
        "website": "https://site.com",
        "instagram": "https://instagram.com/handle"
      },
      "focus": ["React", "JavaScript", "Frontend"]
    }
  ]
}
```

## 🙋‍♀️ volunteers.json

Informações sobre voluntariado:

```json
{
  "volunteers": {
    "info": {
      "title": "Título da seção",
      "description": "Descrição...",
      "contactEmail": "voluntarios@gdgsjc.org"
    },
    "benefits": [...],
    "roles": [...],
    "requirements": {...},
    "timeline": [...]
  }
}
```

## 👥 organizers.json

Dados da equipe organizadora:

```json
{
  "organizers": {
    "event": {
      "name": "DevFest São José dos Campos 2025",
      "date": "2025-10-12",
      "venue": "UNIVAP"
    },
    "team": [...],
    "advisors": [...],
    "contact": {
      "general": "contato@gdgsjc.org",
      "sponsors": "patrocinio@gdgsjc.org"
    },
    "social": {
      "instagram": "https://instagram.com/gdgsjc"
    }
  }
}
```

## 🔄 Como Atualizar os Dados

### 1. Palestrantes
- Edite `speakers.json`
- Adicione fotos em `public/images/speakers/`
- O site será atualizado automaticamente

### 2. Patrocinadores
- Edite `sponsors.json`
- Adicione logos em `public/images/sponsors/`
- Organize por categoria (diamond/gold/silver)

### 3. Comunidades
- Edite `communities.json`
- Adicione logos em `public/images/communities/`
- Inclua informações de contato e redes sociais

### 4. Voluntários
- Edite `volunteers.json`
- Atualize benefícios, funções e cronograma
- Modifique requisitos conforme necessário

### 5. Organizadores
- Edite `organizers.json`
- Adicione fotos em `public/images/organizers/`
- Atualize informações de contato

## 🖼️ Gerenciamento de Imagens

### Estrutura de Imagens:
```
public/images/
├── speakers/           # 400x400px, formato JPG/PNG
├── sponsors/           # Logos em alta resolução
├── communities/        # Logos 200x200px
├── organizers/         # 300x300px, formato JPG/PNG
└── placeholder-avatar.jpg  # Imagem padrão
```

### Dicas para Imagens:
- **Palestrantes**: 400x400px, formato quadrado
- **Logos**: PNG com fundo transparente
- **Otimização**: Use ferramentas como TinyPNG
- **Nomes**: Use kebab-case (nome-sobrenome.jpg)

## 🚀 Processo de Deploy

1. **Edite os arquivos JSON**
2. **Adicione as imagens** na pasta `public/images/`
3. **Teste localmente**: `npm run dev`
4. **Build**: `npm run build`
5. **Commit e push** para GitHub
6. **GitHub Pages** será atualizado automaticamente

## ⚡ Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Validar JSON (opcional)
npm install -g jsonlint
jsonlint src/data/speakers.json
```

## 🎯 Checklist de Atualização

### Antes do Evento:
- [ ] Atualizar lista de palestrantes
- [ ] Confirmar patrocinadores
- [ ] Revisar informações das comunidades
- [ ] Atualizar dados de contato
- [ ] Testar todos os links
- [ ] Otimizar imagens
- [ ] Fazer build e deploy

### Durante o Evento:
- [ ] Fotos dos palestrantes em ação
- [ ] Updates nas redes sociais
- [ ] Feedback dos participantes

### Após o Evento:
- [ ] Adicionar fotos do evento
- [ ] Agradecer palestrantes e patrocinadores
- [ ] Preparar dados para próxima edição

## 🔍 Troubleshooting

### Problema: Imagem não carrega
- Verifique se o arquivo está em `public/images/`
- Confirme o nome do arquivo no JSON
- Use caminhos relativos (/images/...)

### Problema: Dados não aparecem
- Valide a sintaxe JSON
- Verifique se o import está correto no App.jsx
- Confirme a estrutura do objeto JSON

### Problema: Build falha
- Execute `npm run build` para ver erros
- Verifique sintaxe JSON
- Confirme que todas as imagens existem

## 📞 Suporte

Para dúvidas sobre a estrutura de dados:
- **Email**: dev@gdgsjc.org
- **GitHub**: Crie uma issue no repositório
- **Slack**: Canal #devfest-tech

---

Desenvolvido com ❤️ pela equipe do GDG São José dos Campos