const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const display = document.getElementById('display');

searchBtn.addEventListener('click', async () => {
  let query = searchInput.value;
  display.innerHTML = '';
  let data = await fetchData();
  data.forEach((product) => {
    let searchTag = product.etiqueta.search(query);
    let searchDesc = product.descripcion.search(query);
    if (query === product.nombre || searchTag>-1 || searchDesc >-1){
        const item = document.createElement('div');
        item.innerHTML = `
        <div class="card">
        <img src="${product.link}" class="card-img-top" alt="Productos" />
        <div class="card-body">
            <h5 class="card-title card__name">${product.nombre}</h5>
            <p class="categoria_prod">Categoria: ${product.idCategoria}</p>
            <p class="card-text card__description">${product.descripcion}</p>
            <p class="card-text card__etiqueta">${product.etiqueta}</p>
            <p class="price_producto">${product.precio}</p>
            <label class="form-label" for="cantProducto">Cantidad:<input type="number" value = "1" class="form-control" min="0" /></label>
            <p class="stock" value="${product.stock}" hidden>${product.stock}</p>
            </div>
        <div class="card__end">
            <a href="#" class="button--secondary button--card">Agregar al Carro</a>
        </div>
    </div>`
        display.appendChild(item);
    }
  });
});
async function fetchData() {
  const response = await fetch(`https://slifer.bsite.net/td-producto/idSucursal/9`);
  return response.json();
}
