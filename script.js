fetch('https://api.openai.com/v1/completions')
  .then(response => response.json())
  .then(data => console.log(data));