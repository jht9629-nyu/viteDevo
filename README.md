# [viteTest](https://github.com/jht9629-nyu/viteTest.git) ?=v2

- [preact-html](https://jht9629-nyu.github.io/viteTest/preact-html)

- [react-counter/dist](https://jht9629-nyu.github.io/viteTest/react-counter/dist)

- [preact-counter/dist](https://jht9629-nyu.github.io/viteTest/preact-counter/dist)

- [vanilla-counter/dist](https://jht9629-nyu.github.io/viteTest/vanilla-counter/dist)

## What?

Exploring options for website development with vite.

```

https://vite.dev/guide/#scaffolding-your-first-vite-project

npm create vite@latest

Then follow the prompts!

```

## Details

```

jht2@Mac preact-counter % npm run build

> preact-counter@0.0.0 build
> vite build --base=./

vite v6.0.7 building for production...
✓ 11 modules transformed.
dist/index.html                  0.46 kB │ gzip: 0.30 kB
dist/assets/index-SAgMWqxA.css   1.17 kB │ gzip: 0.60 kB
dist/assets/index-CW2zlZAJ.js   16.29 kB │ gzip: 6.93 kB
✓ built in 84ms

jht2@Mac react-counter % npm run build

> react-counter@0.0.0 build
> vite build --base=./

vite v6.0.7 building for production...
✓ 30 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-n_ryQ3BS.css    1.39 kB │ gzip:  0.71 kB
dist/assets/index-CVxg2Wq7.js   143.93 kB │ gzip: 46.36 kB
✓ built in 320ms


-- use arg to set relative base path
  hello-app/package.json
    "build": "vite build --base=./",

-- other way to set relative base path
hello-app/vite.config.jsXX

```
