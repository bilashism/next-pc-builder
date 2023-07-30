import Image from "next/image";
import Link from "next/link";

import { Dropdown, Navbar } from "flowbite-react";
import { useRouter } from "next/router";
import { useGetCategoriesQuery } from "@/redux/api/api";
import { useSession, signOut } from "next-auth/react";

const NavigationEL = () => {
  const { data: userSession } = useSession();
  // console.log(userSession);
  const { pathname, asPath } = useRouter();
  const { data, isLoading, isError, error } = useGetCategoriesQuery();

  const categoriesData = data;
  return (
    <Navbar fluid rounded className="sticky top-0 isolate z-50">
      <Link href="/" className="text-blue-500 font-bold flex-grow">
        <span className="">
          Next <span className="text-purple-600">PC</span>{" "}
        </span>
        <span className="">Builder</span>
      </Link>
      <div className="flex md:order-2 items-center gap-4">
        {userSession?.user?.email ? (
          <Dropdown
            inline
            label={
              <Image
                src={
                  userSession?.user?.image ||
                  `https://gravatar.com/avatar/94d093eda664addd6e450d7e9881fgsf?s=28&d=identicon&r=PG`
                }
                width="40"
                height="40"
                alt={userSession?.user?.name || "user"}
                className="w-10 h-10 rounded-full"
              />
            }>
            <Dropdown.Header>
              <span className="block truncate text-sm font-medium">
                {userSession?.user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link
            href="/login"
            className={`${
              pathname === "/login" ? "text-red-400" : "text-blue-500"
            }`}>
            Login
          </Link>
        )}

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

