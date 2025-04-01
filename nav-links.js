const c = 'nav-links'

import { navIsOpen } from './nav-btns.js'

$(c => {
  c.html`
    ${navIsOpen() ? /*html*/`
      <style>
        nav-links {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(1rem);
        }
          nav-links nav {
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            padding: 10rem var(--font-size-2);
            transform: translateX(1rem);
            z-index: 100;
          }
          @media (min-width: 640px) {
            nav-links nav {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
          }

          @media (min-width: 1280px) {
            nav-links nav {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              place-content: center;
            }
          }
            nav-links div {
              margin: var(--font-size-3) 0;
            }
              nav-links div span,
              nav-links div a {
                display: block;
                padding: var(--font-size-6) 0;
                font-size: var(--font-size-4);
                text-transform: uppercase;
              }
      </style>

      <nav>
        <div>
          <a href="#introduction">Introduction</a>
          <a href="#installation">Installation</a>
          <a href="#signal">Signal</a>
          <a href="#effect">Effect</a>
          <a href="#component">Component</a>
        </div>
        <div>
          <a href="#template">Template</a>
          <a href="#styles">Styles</a>
          <a href="#conditionals">Conditionals</a>
          <a href="#loops">Loops</a>
          <a href="#events">Events</a>
          <a href="#dom-reference">DOM Reference</a>
        </div>
        <div>
          <a href="#declare-state">Declare state</a>
          <a href="#update-state">Update state</a>
          <a href="#derived-state">Derived state</a>
          <a href="#side-effect">Side effect</a>
          <a href="#local-state">Local state</a>
          <a href="#shared-state">Shared state</a>
          <a href="#mount-and-unmount">Mount & unmount</a>
          <a href="#fetch-data">Fetch data</a>
        </div>
        <div>
          <a href="#props-and-emits">Props & emits</a>
          <a href="#slots">Slots</a>
          <a href="#forms">Forms</a>
          <a href="#binding">Binding</a>
          <a href="#media">Media</a>
          <a href="#animations">Animations</a>
        </div>
      </nav>
    ` : ``}
  `

  c.onclick = () => {
    navIsOpen(!navIsOpen())
  }
},c)