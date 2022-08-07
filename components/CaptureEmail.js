import { gql, useMutation } from '@apollo/client';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import ButtonStyles from './styles/ButtonStyles';

const CREATE_EMAIL_MUTATION = gql`
  mutation CREATE_EMAIL_MUTATION(
    #which variables are getting passed in
    $email: String!
  ) {
    createEmail(data: { email: $email }) {
      id
      email
    }
  }
`;

export default function CaptureEmail() {
  const { inputs, handleChange, clearForm } = useForm({
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
                {/* <label htmlFor="email" className="form__label">
                  Email Address
                </label>   */}
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
              </div>
              <div className="form__group">
                <ButtonStyles type="submit" className="btn btn--white">
                  Subscribe &rarr;
                </ButtonStyles>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
