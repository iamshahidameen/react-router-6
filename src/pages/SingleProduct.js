import { Link, useParams } from 'react-router-dom';
import products from '../data';
const SingleProduct = () => {
  const { productID } = useParams();
  const product = products.find((prod) => prod.id === productID);
  const { id, name, image } = product;
  return (
    <section className="section product" id={id}>
      <img src={image} alt={name} />
      <h2>{name}</h2>

      <Link to="/products">Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
