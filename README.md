# [viteDevo](https://github.com/jht9629-nyu/viteDevo.git) ?=v4

- [preact-html](https://jht9629-nyu.github.io/viteDevo/preact-html)

- [vanilla-counter/dist](https://jht9629-nyu.github.io/viteDevo/vanilla-counter/dist)

- [react-counter/dist](https://jht9629-nyu.github.io/viteDevo/react-counter/dist)

- [preact-counter/dist](https://jht9629-nyu.github.io/viteDevo/preact-counter/dist)

## Why?

Exploring options for website development with vite.

## How?

```

https://vite.dev/guide/#scaffolding-your-first-vite-project

npm create vite@latest

Then follow the prompts!

```

## Builds

```
jht2@Mac vanilla-counter % npm run build
> hello-app@0.0.0 build
> vite build --base=./
vite v6.0.7 building for production...
✓ 7 modules transformed.
dist/index.html                 0.46 kB │ gzip: 0.30 kB
dist/assets/index-Bdl7zLtw.css  1.21 kB │ gzip: 0.63 kB
dist/assets/index-CsyE-vZe.js   2.66 kB │ gzip: 1.43 kB
✓ built in 79ms


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

## We are Devo!

- [Q: Are We Not Men? A: We Are Devo!](https://www.youtube.com/watch?v=hRguZr0xCOc)
