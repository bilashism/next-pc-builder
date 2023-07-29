import Image from "next/image";
import Link from "next/link";

const FeaturedCategories = ({ categories }) => {
  return (
    <section className="py-11">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl text-center pb-14">Featured categories</h1>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories
            ?.filter(category => category?.id !== "others")
            .map((category, idx) => (
              <div key={idx + 1} className="flex justify-center items-center">
                <Link
                  href={`/categories/${category?.id}`}
                  className="inline-flex relative isolate z-0 flex-col gap-3 hover:text-blue-500 transition-colors">
                  <Image
                    className="w-80 h-80 object-cover mx-auto rounded-md hover:scale-105 transition-transform"
                    src={category?.image}
                    width={320}
                    height={320}
                    alt={category?.name}
                  />
                  <h2 className="text-center">{category?.name}</h2>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
