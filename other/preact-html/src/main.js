//

import { html, render } from 'https://esm.sh/htm/preact/standalone';

// import { h, render } from 'https://esm.sh/preact';
// import htm from 'https://esm.sh/htm';

// Initialize htm with Preact
// const html = htm.bind(h);

function App(props) {
  return html`<h1>Hello ${props.name}!</h1>`;
}

render(html`<${App} name="World" />`, document.body);

// https://preactjs.com/guide/v10/getting-started#no-build-tools-route
// https://preactjs.com/guide/v10/getting-started/#alternatives-to-jsx
