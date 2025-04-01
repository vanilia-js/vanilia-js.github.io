const c = 'companies-js'

const companies = [
  'microsoft', 'github', 'gitlab', 'adobe', 'ibm', 'sap', 'salesforce', 'amazon', 'google', 'apple',
  'internet-archive', 'nasa', 'space-x', 'ge', 'general-motors', 'ford', 'volkswagen', 'scania', 'alaska-airlines', 'american-airlines', 
  'bbva', 'ing', 'visa', 'stripe', 'comcast', 'thomson-reuters', 'reddit', 'blizzard', 'electronic-arts', 'ubisoft',
  'red-hat', 'esri', 'netlify', 'cloud-four', 'clever-cloud', 'vonage', 'infragistics', 'genesis', 'techniker', 'just-eat'
]

$(c => {
  c.html`
    <style>
      companies-js {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(16vw, 1fr));
        gap: var(--font-size-5);
        align-items: center;
        justify-items: center;
      }
      @media (min-width: 960px) {
        companies-js {
          grid-template-columns: repeat(auto-fit, minmax(14vw, 1fr));
        }
      }
      @media (min-width: 960px) {
        companies-js {
          grid-template-columns: repeat(auto-fit, minmax(12vw, 1fr));
        }
      }
      @media (min-width: 1280px) {
        companies-js {
          grid-template-columns: repeat(auto-fit, minmax(10vw, 1fr));
        }
      }
      @media (min-width: 1600px) {
        companies-js {
          grid-template-columns: repeat(auto-fit, minmax(8vw, 1fr));
        }
      }
        companies-js img {
          width: 6.6rem;
          height: 6.6rem;
          object-fit: contain;
          object-position: center;
          <!-- filter: grayscale(1); -->
          transition: 0.3s ease-in-out;
        }
        companies-js img:hover {
          filter: grayscale(0);
        }
    </style>
    ${companies.map(company => `
      <img loading="lazy" alt="${company}" src="./assets/${company}.svg">
    `).join('')}
  `
},c)