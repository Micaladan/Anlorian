import Link from 'next/link';
import formatMoney from '../lib/formatMoney';

export default function Product({ product }) {
  return (
    <div className="products__item">
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <p className="products__title">
        <Link href={`/product/${product.id}`}>
          <p className="products__title--link">{product.name}</p>
        </Link>
      </p>
      <span className="products__price">{formatMoney(product.price)}</span>
      <p className="products__description">{product.description}</p>
    </div>
  );
}
