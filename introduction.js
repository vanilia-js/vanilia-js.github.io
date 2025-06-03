import './companies.js'

const c = 'introduction-guide'

$(c => {
  c.html`
    <style>
      introduction-guide header {
        padding: 10rem 0;
        display: grid;
        align-content: center;
      }
      @media (orientation: landscape) {
        introduction-guide header {
          min-height: 100vh;
        }
      }
        introduction-guide header h1 {
          margin: 0;
        }
        introduction-guide header h2 {
          font-size: var(--font-size-3);
          padding: var(--font-size-3) 0;
        }

      introduction-guide section {
        margin: 10rem 0;
      }
      @media (min-width: 1280px) {
        introduction-guide section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-scaled);
        }
      }
        introduction-guide section div {
          margin: 10rem 0;
        }

      introduction-guide blockquote {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        padding: var(--font-size-1) 0;
        margin-top: calc(var(--font-size-1) * 2);
      }
        introduction-guide blockquote div {
          text-align: right;
        }
          introduction-guide blockquote div h3 {
            font-size: var(--font-size-4);
            margin: 0 0 var(--font-size-4) 0;
          }
      
    </style>

    <header>
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20">
          <text fill="#fff" font-family="Manrope" font-size="27" font-weight="700" x="0" y="20">VANILIA</text>
        </svg>
      </h1>
      <h2>is a <span class="line-through">next&nbsp;gen game&nbsp;changing cutting&nbsp;edge effortlessly&nbsp;seamless blazingly&nbsp;fast</span> simple design&nbsp;pattern that&nbsp;can help&nbsp;you to&nbsp;progressively remove <span class="line-through">front&#8209;end&nbsp;framework</span> black&#8209;box&nbsp;bloatware from&nbsp;your tech&nbsp;stack.<br>
        Unlike some other tools, it&nbsp;weights <span class="underline">0KB</span> ―&nbsp;you&nbsp;can think&nbsp;of&nbsp;it as&nbsp;an&nbsp;antiframework.<br>
        Vanilia adds reactivity and simplifies usage of standard <span class="underline"><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components">Web&nbsp;Components</a></span> ―&nbsp;technology&nbsp;used&nbsp;by some&nbsp;companies you&nbsp;may&nbsp;have&nbsp;heard&nbsp;of:
      </h2>
    </header>
    <companies-js></companies-js>
    <blockquote>
      <div>
      <a  target="_blank" href="https://youtu.be/AdNJ3fydeao?t=1486"><h4>"There's only&nbsp;one reliable&nbsp;way to speed&nbsp;up your&nbsp;code and&nbsp;that&nbsp;is to get&nbsp;rid&nbsp;of&nbsp;it"</h4></a>
      <footer>~ Rich Harris, creator of Svelte</footer>
      <div>
    </blockquote>
  `
},c)
