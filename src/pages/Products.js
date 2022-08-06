import { Link } from 'react-router-dom';
import productsList from '../data';
import SingleProduct from './SingleProduct';
const Products = () => {
  return (
    <>
      <section className="section">
        <h2>products</h2>
        <div className="products">
          {productsList.map((product) => {
            const { id, name, image } = product;
            return (
              <article key={id}>
                <h5>{name}</h5>
                <Link to={`/products/${id}`} element>
                  {' '}
                  More Info{' '}
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
