
function renderText (example, definition) {
  document.querySelector('#example').innerHTML = example;
  document.querySelector('#definition').innerHTML = definition;
}

function renderGif (gifUrl) {
  document.getElementById('gif').src = gifUrl;
}

document.querySelector("#search-btn").addEventListener('click', function () {
  const term = document.querySelector('#term').value;
  fetch(`/definition?term=${term}`)
    .then(res => res.json())
    .then(data => {
      data = data.list;
      const answerItem = data[0];
      const example = answerItem.example;
      const definition = answerItem.definition;
      renderText(example, definition);
    });

  fetch(`/gif?term=${term}`)
    .then(res => res.json())
    .then(data => {
      if (data.data.length > 0) {
        const gifUrl = data.data[0].images.fixed_height.url;
        renderGif(gifUrl);
      }
    });
});