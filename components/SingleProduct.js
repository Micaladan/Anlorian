import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import Head from 'next/head';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: columns;
  max-width: 120rem;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id: id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Product } = data;
  return (
    <ProductStyles>
      <Head>
        <title>Anlorian | {Product.name}</title>
      </Head>
      <div className="details">
        <img
          src={Product.photo.image.publicUrlTransformed}
          alt={Product.name}
        ></img>
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
      </div>
    </ProductStyles>
  );
}
