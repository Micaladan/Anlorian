import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Michael',
    price: 2345,
    description: 'awesome',
    image: '',
  });
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs);
      }}
    >
      <fieldset>
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

          <label htmlFor="image" className="form__label">
            Image
            <input
              required
              className="form__input"
              type="file"
              id="image"
              name="image"
              placeholder="Image"
              value={inputs.image}
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="btn" type="submit">
          + Add Product
        </button>
        <button className="btn" type="button" onClick={clearForm}>
          Clear Form
        </button>
        <button className="btn" type="button" onClick={resetForm}>
          Reset Form
        </button>
      </fieldset>
    </form>
  );
}
