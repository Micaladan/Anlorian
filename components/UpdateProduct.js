import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;
export default function UpdateProduct({ id }) {
  // 1. Need the existing product
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });
  console.log(data, error, loading);
  // 2. Need mutation to update the product
  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);
  // 2.5 Create Some State for the form inputs
  const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Product);
  console.log(inputs);
  if (loading) return <p>Loading...</p>;
  // 3. Need form to handle updates
  return (
    <div>
      <form
        className="form"
        // TODO handle submit
        onSubmit={async (e) => {
          e.preventDefault();
          const res = updateProduct({
            variables: {
              id,
              name: inputs.name,
              description: inputs.description,
              price: inputs.price,
            },
          }).catch(console.error);
          console.log(res);
        }}
      >
        <DisplayError error={error || updateError}></DisplayError>
        <fieldset disabled={loading} aria-busy={loading}>
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Name
              <input
                required
                className="form__input"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={inputs.name}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="price" className="form__label">
              Price
              <input
                required
                className="form__input"
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                value={inputs.price}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="description" className="form__label">
              Description
              <textarea
                required
                className="form__input"
                type="text"
                id="description"
                name="description"
                placeholder="Description"
                value={inputs.description}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="image">
              Image
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
              />
            </label>
          </div>
          <button className="btn" type="submit">
            + Update Product
          </button>
          <button className="btn" type="button" onClick={clearForm}>
            Clear Form
          </button>
          <button className="btn" type="button" onClick={resetForm}>
            Reset Form
          </button>
        </fieldset>
      </form>
    </div>
  );
}
