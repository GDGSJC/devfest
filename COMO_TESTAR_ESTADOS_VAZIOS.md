# Como Testar os Estados Vazios

Para testar os estados "Em breve" quando as arrays estão vazias, você pode temporariamente substituir os dados nos arquivos JSON:

## Testando Palestrantes Vazio

1. Edite `src/data/speakers.json`
2. Substitua o conteúdo por:
```json
{
  "speakers": []
}
```

## Testando Patrocinadores Vazio

1. Edite `src/data/sponsors.json`
2. Substitua o conteúdo por:
```json
{
  "sponsors": {
    "diamond": [],
    "gold": [],
    "silver": []
  },
  "sponsorshipTiers": {
    // ... mantenha o resto
  }
}
```

## Testando Comunidades Vazio

1. Edite `src/data/communities.json`
2. Substitua o conteúdo por:
```json
{
  "partnerCommunities": []
}
```

## Testando Organizadores Vazio

1. Edite `src/data/organizers.json`
2. Substitua o campo `team` por:
```json
{
  "organizers": {
    "event": {
      // ... mantenha
    },
    "team": [],
    // ... resto dos dados
  }
}
```

## Testando Voluntários Vazio

1. Edite `src/data/volunteers.json`
2. Substitua o campo `roles` por:
```json
{
  "volunteers": {
    "info": {
      // ... mantenha
    },
    "benefits": [
      // ... mantenha
    ],
    "roles": [],
    // ... resto dos dados
  }
}
```

Após fazer essas alterações, execute `npm run dev` para ver as mensagens "Em breve" aparecerem.