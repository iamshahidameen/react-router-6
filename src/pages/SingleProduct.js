import { useParams } from 'react-router-dom';
const SingleProduct = () => {
  console.log(useParams());
  const { productID } = useParams();
  return (
    <section className="section product">
      <h2>{productID}</h2>
    </section>
  );
};

export default SingleProduct;
