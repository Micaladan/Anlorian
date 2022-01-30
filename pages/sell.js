import CreateProduct from '../components/CreateProduct';
import PleaseSignIn from '../components/PleaseSignIn';

export default function sell() {
  return (
    <div>
      <h1 className="heading-primary heading-primary--main">Sell Page</h1>
      <PleaseSignIn>
        <CreateProduct />
      </PleaseSignIn>
    </div>
  );
}
