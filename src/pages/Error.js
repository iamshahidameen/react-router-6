import { Link, link } from 'react-router-dom';
const Error = () => {
  return (
    <section className="section">
      <h2>Error</h2>
      <p>Page Not Found</p>
      <Link to="/">Back 2 Home</Link>
    </section>
  );
};
export default Error;
