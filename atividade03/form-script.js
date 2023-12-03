document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('package-form');
    const container = document.getElementById('destination-container');
    const insertButton = document.getElementById('insert-button');
  
    insertButton.addEventListener('click', function () {
      const name = document.getElementById('destination-name').value;
      const imageUrl = document.getElementById('image-url').value;
  
      // Crie um novo item da classe roteiro-viagens
      const newDestination = document.createElement('div');
      newDestination.className = 'destination';
  
      newDestination.innerHTML = `
        <img src="${imageUrl}" alt="${name}">
        <h2>${name}</h2>
        <!-- Adicione outras informações conforme necessário -->
        <button class="buy-button">Comprar</button>
      `;
  
      // Adicione o novo item à classe container destinos
      container.appendChild(newDestination);
    });
  });
  