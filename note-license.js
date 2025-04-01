const c = 'note-license'

$(c => {
  c.html`
    <style>
      note-license footer {
        display: flex;
        justify-content: space-between;
        padding: 0 0 var(--space-scaled) 0;
      }
    </style>

    <footer>
      <small>Released in Szczecin under the <strong><a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a></strong></small>
      <small>Copyright © 2025 C.A. Walczak <strong><a href="https://app.daily.dev/valtschak" target="_blank" rel="noopener noreferrer">@valtschak</a></strong></small>
    </footer>
  `
},c)