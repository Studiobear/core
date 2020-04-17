# GraphQL API for Yager Galerie Collecitons

Built using PostgreSQL, Prisma, Nexus, GraphQL and Apollo.

## Dev Notes

All commands can be run from monorepo root by replacing `yarn` with `yarn colapi`

### Getting started

Setup .env files in `yg-col-spi` and `./prisma`

#### Database setup

Initialize DB and setup Prisma Client:

```sh
yarn prisma:mig-save init
yarn prisma:mig-up
yarn prisma:gen
```

Create `./prisma/seed.ts` then run:

```sh
yarn prisma:seed
```

#### Nexus Setup

Autogen types and schema.

```sh
yarn nexus:gen
```

#### Start developing!

```sh
yarn dev
```
