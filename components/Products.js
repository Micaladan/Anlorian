import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Product from './Product';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="heading-primary--main heading-primary u-center-text">
        Products
      </h1>
      <div className="products">
        {data.allProducts.map((product) => (
          <div>
            <Product product={product} key={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
