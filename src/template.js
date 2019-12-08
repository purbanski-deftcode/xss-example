/*
Here we are defining template that is used to generated final HTML by replacing %items% with proper content
*/

module.exports = `
<body>
  <ul>
    %items%
  </ul>
  
  <input type="text" id="value">
  <button id="button">Add</button>
  
  <script>
    const btn = document.querySelector('#button');
    const input = document.querySelector('#value');

    btn.addEventListener('click', () => {
      const value = input.value;

      fetch('http://localhost:4000/add', {
        body: JSON.stringify({ value }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(() => {
        location.reload();
      });
    });
  </script>
</body>
`;
