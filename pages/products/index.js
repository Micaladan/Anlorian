import { useRouter } from 'next/dist/client/router';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

export default function products() {
  const { query } = useRouter();
  const page = parseInt(query.page);

  return (
    <div>
      <div>
        <h1>Products</h1>
      </div>
      <Pagination page={page || 1} />
      <Products page={page || 1} />
    </div>
  );
}
