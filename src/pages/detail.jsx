import { render } from '@czechitas/render';
import '../global.css';
import './detail.css';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch (`http://localhost:4000/api/products/${id}`)
const json = await response.json()
const products = json.data

const ProductPage = () => {
  return (
    <>
      <div className='nadpis'>
        <h1>Detail produktu</h1>
      </div>
      <div className="container">
        <img src={products.obrazek} alt={products.name}></img>
        <h1>{products.name}</h1>
        <p>Cena: {products.cena},-</p>
        <div>
          <a href={`index.html`}>Zpět</a>
        </div>
      </div>
    </>
  )
}

document.querySelector('#root').innerHTML = render(
  <>
    <ProductPage/>
  </>
);