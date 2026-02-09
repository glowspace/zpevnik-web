# Zpěvník: webová aplikace

Tento repozitář obsahuje webové uživatelské rozhraní tří zpěvníků:

- [Zpěvník ProScholy.cz](https://zpevnik.proscholy.cz)
- [Evangelický zpěvník](https://www.evangelickyzpevnik.cz)
- [Evangelický kancionál](https://www.evangelickykancional.cz)

Je založený na frameworku [Nuxt](https://nuxt.com) ve verzi 4.

## Prostředí pro vývoj

1. `cp .env.example .env` (nebo `copy .env.example .env`)
2. `yarn install`
3. `yarn dev`

Vývojový server se spustí na adrese `http://localhost:3000`.

Produkční build lze vytvořit pomocí `yarn build`. Náhled produkčního serveru se spouští příkazem `yarn preview`.

## Evangelický zpěvník

> Digitální evangelický zpěvník je společným projektem [Českobratrské církve evangelické](https://e-cirkev.cz/) a týmu vývojářů z komunity [Glow Space](https://glowspace.cz/).

Logo ČCE je jejím duševním vlastnictvím a nevztahuje se na něj open-source licence, pod kterou je zdrojový kód aplikace zveřejněný.
