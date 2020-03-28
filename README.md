# Studiobear Projects Monorepo

This is a monorepo for Studiobear projects. Have a look around!

This monorepo was initially built around Svelte and created as a [template](https://github.com/Studiobear/svelte-monorepo-starter). The monorepo structure makes the tie-in to Svelte superficial as any type of package, not even just JS, can live within. Visit the above template link to find out more about how this monorepo is created and works.

---

## [GlobalRefactor]

- **Docker/Compose**: Docker/docker-compose files were created for `covid-api` (in the end, not used), however this led to understanding that building docker containers in a monorepo were easiest from the root. However, the root doesn't need even more config file mess, thus should be refactored into a `containers` dir. Working directory alternations will have to be made, of course.

---

## License

[MIT](LICENSE)

<p align="right">
<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>
</a>
</p>
