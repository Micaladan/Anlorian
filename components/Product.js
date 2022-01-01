import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import AddToCart from './AddToCart';
import DeleteProduct from './DeleteProduct';

export default function Product({ product }) {
  return (
    <div className="products__item">
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <div className="products__title">
        <Link href={`/product/${product.id}`}>
          <p className="products__title--link">{product.name}</p>
        </Link>
      </div>
      <span className="products__price">{formatMoney(product.price)}</span>
      <p className="products__description">{product.description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: 'update',
            query: {
              id: product.id,
            },
          }}
        >
          Edit
        </Link>
        <AddToCart id={product.id} />
        <DeleteProduct key={product.id} id={product.id}>
          Delete
        </DeleteProduct>
      </div>
    </div>
  );
}
