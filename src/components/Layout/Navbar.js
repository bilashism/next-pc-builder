import Image from "next/image";
import Link from "next/link";

import { Dropdown, Navbar } from "flowbite-react";
import { useRouter } from "next/router";
import { useGetCategoriesQuery } from "@/redux/api/api";

const NavigationEL = () => {
  const { pathname, asPath } = useRouter();
  const {
    data: categoriesData,
    isLoading,
    isError,
    error
  } = useGetCategoriesQuery(); //-> redux store data
  return (
    <Navbar fluid rounded className="sticky top-0 isolate z-50">
      <Link href="/" className="text-blue-500 font-bold">
        <span className="">
          Next <span className="text-purple-600">PC</span>{" "}
        </span>
        <span className="">Builder</span>
      </Link>
      <div className="flex md:order-2">
        <Link
          href="/login"
          className={`${
            pathname === "/login" ? "text-red-400" : "text-blue-500"
          }`}>
          Login
        </Link>
        <Dropdown
          inline
          label={
            <Image
              src="https://gravatar.com/avatar/94d093eda664addd6e450d7e9881fgsf?s=28&d=identicon&r=PG"
              width="28"
              height="28"
              alt="user"
            />
          }>
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            {/* <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span> */}
          </Dropdown.Header>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          className={`${pathname === "/" ? "text-red-400" : "text-blue-500"}`}
          href="/">
          <p>Home</p>
        </Link>

        <Dropdown
          inline
          label={
            <span
              className={`${
                pathname === "/categories/[category]"
                  ? "text-red-400"
                  : "text-blue-500"
              }`}>
              Categories
            </span>
          }
          className="">
          {categoriesData?.map(category => (
            <Dropdown.Item key={category?.id} className="p-0">
              <Link
                href={`/categories/${category?.id}`}
                className={`${
                  asPath === `/categories/${category?.id}`
                    ? "text-red-400"
                    : "text-blue-500"
                } w-full h-full px-3 py-2 text-start`}>
                {category?.name}
              </Link>
            </Dropdown.Item>
          ))}
        </Dropdown>
        <Link
          href="/build-pc"
          className={`${
            pathname === "/build-pc" ? "text-red-400" : "text-blue-500"
          }`}>
          Build PC
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationEL;

