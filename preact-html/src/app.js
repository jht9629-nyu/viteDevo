//
// import { useState, html, render } from 'https://esm.sh/htm/preact/standalone';
import { render } from 'preact';
import { html } from 'htm/preact';
import { useState } from 'react';

// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
// import './app.css';

// import './style.css';

import sheet from './style.css' with {type: 'css'}
document.adoptedStyleSheets = [sheet];

// import app_sheet  from './app.css' with {type: 'css'}
// document.adoptedStyleSheets = [ app_sheet];

export function App() {
  const [count, setCount] = useState(0);

  return html`<div id="id_app">
    <h1>Preact</h1>
    <div class="card">
      <button onClick=${() => setCount((count) => count + 1)}>count is ${count}</button>
      <p>Edit <code>src/app.js</code> and save to test HMR</p>
    </div>
    <!-- <p>
      Check out
      <a href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app" target="_blank">
        create-preact
      </a>
      , the official Preact + Vite starter
    </p> 
    <p class="read-the-docs">Click on the Vite and Preact logos to learn more</p>
    -->
  </div>`;
}

// render(html`<${App} name="World" />`, document.body);
render(html`<${App} name="World" />`, document.body);

// https://web.dev/articles/css-module-scripts
