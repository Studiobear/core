# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 0.4.1 (2020-09-05)


### Features

* **covid:** 
* **studiobear-site:** moved to [landofhere/psa-covid19](https://github.com/landofhere/psa-covid19)
    * initial setup ([8dddb3a](https://github.com/Studiobear/core/commit/8dddb3ad2d421b61fbb8c24c5b7758cc2b5d6f01))
* **svelte-styled-system:**  moved to [Studiobear/Designspek](https://github.com/Studiobear/designspek)
* **svelte-styled-system-components:** moved to [Studiobear/Designspek](https://github.com/Studiobear/designspek)
* **svelte-system-ui:** archived
* **yg-col:**
    * apollo graphql ([beaf19f](https://github.com/Studiobear/core/commit/beaf19fcce8e5c3b4317b6d84516bffbe85f6c01))
    * footer ([a01c846](https://github.com/Studiobear/core/commit/a01c846db837ad0b66d3ffbda0e02f0afd617018))
    * landing ([200e1f3](https://github.com/Studiobear/core/commit/200e1f34c80d1f9af88a38d9fc7542db987fd484))
    * loading component ([02ac5e0](https://github.com/Studiobear/core/commit/02ac5e05e88700731c1c375c2522a279c3c3385a))
    * local (s|f)torage ([9e2d9df](https://github.com/Studiobear/core/commit/9e2d9df26b8ea5564cdc84e944aa82afc4918fa0))
    * login ([f0b4a65](https://github.com/Studiobear/core/commit/f0b4a65df7fff6166658103f484b6af9b869ba98))
    * logout ([76b8009](https://github.com/Studiobear/core/commit/76b8009325d787616cd5a7d9cfda6804c44251e4))
* **yg-col-api:**
    * add server utils ([08bce2e](https://github.com/Studiobear/core/commit/08bce2e050cb68a1578c74fe1882934a1792e1d0))
    * add types collection, work, workOrder, phone, image ([d0e8c98](https://github.com/Studiobear/core/commit/d0e8c984c99ec1c27828330210e33bfeb894efac))
    * cors config ([0a020e0](https://github.com/Studiobear/core/commit/0a020e0e9d5700d9d2ffff8745d02d0ae3accefd))
    * generate flag for schema type autogen ([3a0e83f](https://github.com/Studiobear/core/commit/3a0e83f65d076ad8dcf32182e443f7555208a429))
    * init prisma setup ([e5f7954](https://github.com/Studiobear/core/commit/e5f795476d48d8225d688285f75345812e61acc6))
    * initial seeds + queries ([872d7fd](https://github.com/Studiobear/core/commit/872d7fd090fe414ef7d1fec13bb3e08a3baf6d1c))
    * me query ([5515c7b](https://github.com/Studiobear/core/commit/5515c7bf2ec5d4c504fee5c3635d760202b3a28e))
    * mutations login + register ([c78d3b1](https://github.com/Studiobear/core/commit/c78d3b176bd133513de0d12a4d7a0ac5b83ab74a))
    * prisma schema ([34eb77a](https://github.com/Studiobear/core/commit/34eb77a6857a289bc52d1c29a95d9605c75aead4))
    * prisma seed ([52aeea2](https://github.com/Studiobear/core/commit/52aeea250e6efb3b0af62207a30859c7071978b1))
    * works query ([4660247](https://github.com/Studiobear/core/commit/466024741e324815ca97108736f427b8aea1cf33))
    * worksByCollection query ([ffbb302](https://github.com/Studiobear/core/commit/ffbb3021ddcb2d69d0cd4278c30b742deb9f09f9))


### Bug Fixes

* **covid:**
    * debug mobile position + button styles ([1fc5142](https://github.com/Studiobear/core/commit/1fc5142cd32cf1cd0f16c9e7ea2cf59782fd1c34))
    * fix api query ([c12365e](https://github.com/Studiobear/core/commit/c12365e21b88252cdaa5e606c3473dcf5958e6a7))
    * reworked parsing of country/region data ([cbcc3dd](https://github.com/Studiobear/core/commit/cbcc3dd4ab141b5ed11253d2a57914f70ef5860e))
* **svelte-system-ui:** fix units for space ([56d8d9f](https://github.com/Studiobear/core/commit/56d8d9f151661d3dda1daab80a90c7337ad34850))
* **svelte-system-ui:** re-add gridGap ([75a15a2](https://github.com/Studiobear/core/commit/75a15a27fb4bd7b3276a4dc8e1034bfe3847cc33))
* **svelte-system-ui:** update constants to camelCase ([cd4eb40](https://github.com/Studiobear/core/commit/cd4eb40dc55cf9e5b0ec2255c974178814e0fac3))
* **svelte-system-ui-components:** extend grid stories ([2d2826e](https://github.com/Studiobear/core/commit/2d2826eb5dba882394e159e6691ea1eb863349f6))
* **yager1:** re-add routes + tests ([af97225](https://github.com/Studiobear/core/commit/af97225b49f16b089d29ea62000ce9222bb1883f))
* **yg-col:**
    * GET_ME query error ([85e0a2d](https://github.com/Studiobear/core/commit/85e0a2ddb8dd1f7774e64d56e6b452c7d3323ec5))
    * svelt await catch bug ([93d1acf](https://github.com/Studiobear/core/commit/93d1acf84bec992b369e506e8e9b692018a76f9d))
* **yg-col-api:**
    * adjust createContext ([2a188cf](https://github.com/Studiobear/core/commit/2a188cf3bba2a65cbdd6e5b4166a0bbcd58df6cc))
    * alter table for migration ([da82e50](https://github.com/Studiobear/core/commit/da82e5083e37bb4d8e85631945c46e12d7bbb2bd))
    * build: rebuild prisma client ([947c44c](https://github.com/Studiobear/core/commit/947c44cc7269e0f2d14355e961e8f8f323fe9e60))
    * endpoint default authorization error ([0bf8793](https://github.com/Studiobear/core/commit/0bf87937b6a7208e5ed204d573c8c8fa87b92885))
    * remove files built into src ([b499f24](https://github.com/Studiobear/core/commit/b499f243e664908d53179aa2b093772dc895ffc3))
    * set apollo cors false ([7aa9ceb](https://github.com/Studiobear/core/commit/7aa9ceb189f72a005c604959d255fac3356056d3))
    * ts lint fix ([e7e4a44](https://github.com/Studiobear/core/commit/e7e4a442c3a2eebe3f49c062d11a2467251847db))
    * typegen babel needed ext defined ([19d3d0b](https://github.com/Studiobear/core/commit/19d3d0b1a1619995fcd7221a202075bb2e5f73a0))
    * update login query + remove loggin Error prototypes ([bae2434](https://github.com/Studiobear/core/commit/bae243436a7c1254e78177028aacb9c0a0357be4))


## [0.3.0](https://github.com/Studiobear/svelte-monorepo-starter/compare/v0.2.1...v0.3.0) (2020-02-16)

### [0.2.1](https://github.com/Studiobear/svelte-monorepo-starter/compare/v0.2.0...v0.2.1) (2020-02-16)


### Features

* **my-site:** create markdown processor ([971c78f](https://github.com/Studiobear/svelte-monorepo-starter/commit/971c78faff575ca216d75f24fa47c92086151b80))
* **my-site:** generate excerpts using excerpt comment in md ([a2683b9](https://github.com/Studiobear/svelte-monorepo-starter/commit/a2683b9ad6a4515f2e05a2a8fb5913ffe980546e))
* **my-site:** markdown import into blog index and sub pages ([2a16eeb](https://github.com/Studiobear/svelte-monorepo-starter/commit/2a16eeb94832a97cf265fa5b05351c67824e3196))
* **my-site:** parse markdown frontmatter ([b972f76](https://github.com/Studiobear/svelte-monorepo-starter/commit/b972f76827208a37b0c10dac15ea629b0a8977bd))
* **my-site:** sub-posts render markdown ([2646d86](https://github.com/Studiobear/svelte-monorepo-starter/commit/2646d869c7822e9b2449f532daec16acd1e0a0bc))


### Bug Fixes

* **my-site:** extract frontmatter from md ([99c755d](https://github.com/Studiobear/svelte-monorepo-starter/commit/99c755d8ff370ea0b7cec9d0fc68acc443bbeba9))

## [0.2.0](https://github.com/Studiobear/svelte-monorepo-starter/compare/v0.1.1...v0.2.0) (2020-02-12)

### [0.1.1](https://github.com/Studiobear/svelte-monorepo-starter/compare/v0.1.0...v0.1.1) (2020-02-12)


### Features

* **my-site:** use local component library ([d100d79](https://github.com/Studiobear/svelte-monorepo-starter/commit/d100d7910f5fe404d58c3cf891791fe1949a3c9c))
* **my-svelte-component-library:** integrate storybook ([16e23f8](https://github.com/Studiobear/svelte-monorepo-starter/commit/16e23f89ce916ef5af996153e01d1aa65d76301f))


### Bug Fixes

* ci cache clear added ([771649f](https://github.com/Studiobear/svelte-monorepo-starter/commit/771649fd742335fb50389585dc505584414eece8))
* fix ci badge [ci-skip] ([22092aa](https://github.com/Studiobear/svelte-monorepo-starter/commit/22092aa08618488228ef5f1b3585add29404e149))
* Update license ([a7f85fd](https://github.com/Studiobear/svelte-monorepo-starter/commit/a7f85fd115918c3de3803356372f3aeaee147f34))
* **my-site:** my-svelte-component-library package version ([dea9751](https://github.com/Studiobear/svelte-monorepo-starter/commit/dea9751dba3afcdf6502f2ff30252941750a9430))

## [0.1.0](https://github.com/Studiobear/svelte-monorepo-starter/compare/v0.0.2...v0.1.0) (2020-02-10)


### Features

* ci/cd setup + README ([c4b56aa](https://github.com/Studiobear/svelte-monorepo-starter/commit/c4b56aaa03087e18ec67ca85e84601c07869ab78))
* split deploy to prod + stage ([d0fdda6](https://github.com/Studiobear/svelte-monorepo-starter/commit/d0fdda6d5a9b1ab2a9f44ed7fc8d98145a1ab5a6))


### Bug Fixes

* add granular versioning to semaphore cache store ([38b57a9](https://github.com/Studiobear/svelte-monorepo-starter/commit/38b57a99dedf394c8432c65257d7b91a7b8f3400))
* allow build for all ([70a4113](https://github.com/Studiobear/svelte-monorepo-starter/commit/70a41136e7f340cb30387e62c0146c2b282032e7))
* caching ([0955bf8](https://github.com/Studiobear/svelte-monorepo-starter/commit/0955bf827df4322ae2158ef290847d300af1d10d))
* caching ([141f844](https://github.com/Studiobear/svelte-monorepo-starter/commit/141f844792d7e602ef85fd67179d35734a2ae8fb))
* caching ([3bc79fa](https://github.com/Studiobear/svelte-monorepo-starter/commit/3bc79faad0d36d74780c95a42b767a71220d98ca))
* ci build skip when not master or develop ([5d224dd](https://github.com/Studiobear/svelte-monorepo-starter/commit/5d224dd2cad01b74e200d4a84a429726bc2e1896))
* ci build switch to export ([c7cad05](https://github.com/Studiobear/svelte-monorepo-starter/commit/c7cad051d1971e9521d0d541c13e83a212d20d04))
* merge conflict ([feebb10](https://github.com/Studiobear/svelte-monorepo-starter/commit/feebb10c5f1212574c0a0d5926b4d23b93296b74))
* my-site export instead of build ([dbc0d02](https://github.com/Studiobear/svelte-monorepo-starter/commit/dbc0d025cc46041aa4182d8ce408d2f7771b7937))
* semaphore autopromote ([37f2bf2](https://github.com/Studiobear/svelte-monorepo-starter/commit/37f2bf2b8afe8eb7c0112f835b7590a159fdc9ce))
* semaphore cache config ([364dff1](https://github.com/Studiobear/svelte-monorepo-starter/commit/364dff1164bbe5385cb49e487463e5b3d1eb558f))
* semaphore punctuation ([7aeacf9](https://github.com/Studiobear/svelte-monorepo-starter/commit/7aeacf9ad0ba7137a0c8518ab608d113a73dde34))
* semaphore spacing ([105ce52](https://github.com/Studiobear/svelte-monorepo-starter/commit/105ce52b3d4bca959cc26f5c434c55626ff01f55))
* semaphore yaml formatting ([17a7f4a](https://github.com/Studiobear/svelte-monorepo-starter/commit/17a7f4a7b52426cab2c92766d23c3b50e0ded901))
* simplify conditionals ([647632f](https://github.com/Studiobear/svelte-monorepo-starter/commit/647632fd12cf393c75bc5890799806ea369e7ef1))
* simplify names ([f4cda54](https://github.com/Studiobear/svelte-monorepo-starter/commit/f4cda541d12ab5883bf1c4883fa2973992576b1d))
* update netlify deploy dir ([1b5939c](https://github.com/Studiobear/svelte-monorepo-starter/commit/1b5939cd3d8e7c0c05cf9696c28bc1bf1b574251))
* update semaphore netlify auth ([4410729](https://github.com/Studiobear/svelte-monorepo-starter/commit/4410729426410da7f8011357d899fc8e510211d4))

### 0.0.2 (2020-02-10)


### Features

* add global eslint ([993be1e](https://github.com/Studiobear/svelte-monorepo-starter/commit/993be1e104f5d9d0158255caf950bbdc19a837bd))
* add prettier linting + configure lerna scripts ([91b36a5](https://github.com/Studiobear/svelte-monorepo-starter/commit/91b36a57156137678a67cce5bd10f317a4982b58))
* configure lint-staged ([1c14520](https://github.com/Studiobear/svelte-monorepo-starter/commit/1c145208880675518898f50b5a103265d907e599))
* initial monorepo setup ([3d10324](https://github.com/Studiobear/svelte-monorepo-starter/commit/3d10324734e10ede773b2a14d40e92383ecb435a))
* setup commitizen + commitlint ([4ab069f](https://github.com/Studiobear/svelte-monorepo-starter/commit/4ab069f98626a7c2dcc880e6f763b92545c63c76))


### Bug Fixes

* lint-staged config ([aa8ac79](https://github.com/Studiobear/svelte-monorepo-starter/commit/aa8ac79c91ed030a78a7f7d315d2e815d872a8d5))
* serialize-javascript ([74e9bf4](https://github.com/Studiobear/svelte-monorepo-starter/commit/74e9bf4de4e73441e4e67d81f1bb8e0607b8e618))
