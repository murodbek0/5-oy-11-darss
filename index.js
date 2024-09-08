document.addEventListener('DOMContentLoaded', () => {
  const loader   = document.getElementById('loader');
  const Container = document.getElementById('container');
  const loadMoreButton = document.getElementById('load-more');

  let photos = [];

  function fetchPhotos() {
      fetch('https://jsonplaceholder.typicode.com/photos')
          .then(response => response.json())
          .then(data => {
              photos = data;
              loader.style.display = 'none'; 
              displayPhotos(); 
          })
          .catch(error => {
              console.error('Error fetching photos:', error);
              loader.textContent = 'Error loading photos.';
          });
  }

  function displayPhotos() {
      Container.innerHTML = ''; 
      photos.forEach(photo => {
          const card = document.createElement('div');
          card.classList.add('card');
          
          const title = document.createElement('h3');
          title.textContent = photo.title;

          card.appendChild(title);
          Container.appendChild(card);
      });
      Container.classList.add('show'); 
      loadMoreButton.style.display = 'none'; 
  }

  loadMoreButton.addEventListener('click', displayPhotos);

  fetchPhotos();
});
