import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProducts = ({ products }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="">
          <h1 className="text-2xl text-center pb-12">Featured Products</h1>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products?.map((product, idx) => (
              <FeaturedProductCard key={idx + 1} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
