# @andrebrum/ui (yarn)

Biblioteca de componentes React + TypeScript + Tailwind, distribuída **via GitHub Releases** (sem npm registry).

## Desenvolvimento (yarn)
```bash
yarn install
yarn build
yarn dev   # se quiser build em watch
```

## Publicação (via Release no GitHub)
1. Crie uma tag:
```bash
git tag v0.1.0
git push --tags
```
2. O GitHub Actions (workflow `release.yml`) irá:
   - instalar dependências com `yarn`
   - gerar `dist/`
   - empacotar com `npm pack` (para nomear o tarball corretamente)
   - anexar o `.tgz` à Release

## Como instalar no app consumidor (sem registry)
**Recomendado (tarball da Release):**
```bash
yarn add https://github.com/<seu-usuario>/andrebrum-ui/releases/download/v0.1.0/andrebrum-ui-0.1.0.tgz
```

**Alternativo (instalação direta do repo Git):**
```bash
yarn add <seu-usuario>/andrebrum-ui#v0.1.0
```

## Configuração do Tailwind no app
`tailwind.config.js`
```js
module.exports = {
  presets: [require('@andrebrum/ui/tailwind.preset')], // opcional
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './node_modules/@andrebrum/ui/dist/**/*.{js,mjs}'
  ]
};
```

## Uso
```tsx
import { Button } from '@andrebrum/ui';
export default function Page() {
  return <Button variant="primary">Olá</Button>;
}
```
