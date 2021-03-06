# Lancement
Oubliez pas de copier le .env et de le modifier avec vos données de la BDD
```bash
cp .env.example .env
php artisan key:generate
```

pour lancer le serveur dev. Ca compile le app.js, nuxt et lance le serveur laravel sur le port:3000
```bash
npm run dev
```


## Nuxt Laravel Starter

Laravel framework with integrated NuxtJs support, preconfigured for eslint, jest and vuetify.

For typescript support checkout the [`typescript`](https://github.com/m2sd/nuxt-laravel-starter/tree/typescript) branch.

## Scripts

```bash
# *** Global ***
# development build with nuxt dev server with hot reloading
npm run dev
# production build
npm run build
# perform tests
npm run test
# find linting errors
npm run lint
# autofix linting errors
npm run lint:fix
# check for conflicting lint rules
npm run lint:check

# *** Laravel ***
# development build
npm run mix:dev
# development build with file watching
npm run mix:watch
# development build with file watching and polling
npm run mix:watch:poll
# development build with file watching, polling and hot reloading
npm run mix:hot
# production build
npm run mix:build
# perform tests (not implemented)
npm run mix:test

# *** Nuxt ***
# run dev server with hot reloading
npm run nuxt:dev
# production build
npm run nuxt:build
# perform tests
npm run nuxt:test
```
