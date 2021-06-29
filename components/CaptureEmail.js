import { gql, useMutation } from '@apollo/client';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';

const CREATE_EMAIL_MUTATION = gql`
  mutation CREATE_EMAIL_MUTATION(
    #which variables are getting passed in
    $name: String!
    $email: String!
  ) {
    createEmail(data: { name: $name, email: $email }) {
      id
      name
      email
    }
  }
`;

export default function CaptureEmail() {
  const { inputs, handleChange, clearForm } = useForm({
    name: '',
    email: '',
  });

  const [createEmail, { loading, error, data }] = useMutation(
    CREATE_EMAIL_MUTATION,
    {
      variables: inputs,
    }
  );

  return (
    <div className="row">
      <div className="book">
        <div className="book__form">
          <div className="u-margin-bottom-medium">
            <h2 className="heading-secondary">Join Our Mailing List!</h2>
          </div>
          <DisplayError error={error} />
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              console.log(inputs);
              //submit input fields to backend
              await createEmail();
              clearForm();
            }}
            className="form"
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full Name"
                  id="name"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email Address"
                  id="email"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email Address
                </label>
              </div>
              <div className="form__group">
                <button type="submit" className="btn btn--green">
                  Subscribe &rarr;
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
