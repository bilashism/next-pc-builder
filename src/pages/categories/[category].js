import RootLayout from "@/components/Layout/RootLayout";
import SingleCategoryProducts from "@/components/UI/SingleCategoryProducts";

const Category = ({ products }) => {
  // const {
  //   query: { category }
  // } = useRouter();

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   if (products.length === 0 || products.length === undefined) {
  //     fetch(`http://localhost:3000/api/categories?id=${category}`)
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //         setProducts(data);
  //       })
  //       .catch(err => console.error(err));
  //   }
  // }, [products?.length, category]);

  if (!products || products?.length === 0) {
    return <div>No products to display.</div>;
  }

  return (
    <div>
      <h2 className="">products: {products?.length}</h2>
      <SingleCategoryProducts products={products} />
    </div>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const categories = await res.json();
  const paths = categories?.map(news => ({
    params: { category: news.id }
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { category } }) => {
  const res = await fetch(
    `http://localhost:3000/api/categories?id=${category}`
  ); // --> json server
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      products: data
    }
    // revalidate: 10
  };
};
