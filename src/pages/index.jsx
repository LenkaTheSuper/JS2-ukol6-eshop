import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response = await fetch ("http://localhost:4000/api/products")
const json = await response.json()
const products = json.data

const Product = () => {
  return (
    <div className='container'>
    {
      products.map((item) => (
        <div key={item.id} className='products'>
          <h1>{item.name}</h1>
          <p>{item.cena},-</p>
          <button><a href={`detail.html?id=${item.id}`}>Detail</a></button>
        </div>
      ))
    }
    </div>
  )
}

const HomePage = () => {
  return (
    <>
      <Product/>
    </>
  )
}

document.querySelector('#root').innerHTML = render(
  <>
    <HomePage/>
  </>
);

//document.querySelector("#addProduct").addEventListener("click", handleProduct)