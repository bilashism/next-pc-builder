const SingleCategoryProducts = props => {
  const { products } = props;
  return (
    <div>
      <h2 className=""></h2>
      {products?.map(prod => (
        <h2 key={prod.id} className="">
          {prod.productName}
        </h2>
      ))}
    </div>
  );
};

export default SingleCategoryProducts;
