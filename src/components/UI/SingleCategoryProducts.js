import FeaturedProductCard from "./FeaturedProductCard";

const SingleCategoryProducts = props => {
  const { products } = props;
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
          {products?.map(prod => (
            <FeaturedProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryProducts;
