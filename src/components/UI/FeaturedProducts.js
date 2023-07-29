const FeaturedProducts = ({ products }) => {
  return (
    <>
      <h1 className="text-2xl text-center">Featured Products</h1>
      <div className="">
        {products?.map((product, idx) => (
          <p key={idx + 1}>{product.productName}</p>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
