const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const display = document.getElementById('display');

searchBtn.addEventListener('click', async () => {
  let query = searchInput.value;
  display.innerHTML = '';
  let data = await fetchData();
  let found = false;
  data.forEach((product) => {
    let searchTag = product.etiqueta.search(query);
    let searchDesc = product.descripcion.search(query);
    if (query === product.nombre || searchTag>-1 || searchDesc >-1){
        const item = document.createElement('div');
        item.innerHTML = `
        <h2>${product.nombre}</h2>
        <p>${product.descripcion}</p>`;
        display.appendChild(item);
    }
  });
});

async function fetchData() {
  const response = await fetch(`https://slifer.bsite.net/td-producto/idSucursal/9`);
  return response.json();
}
