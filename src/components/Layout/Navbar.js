import Image from "next/image";
import Link from "next/link";

import { Dropdown, Navbar } from "flowbite-react";
import { useRouter } from "next/router";

const NavigationEL = () => {
  const { pathname } = useRouter();
  return (
    <Navbar fluid rounded className="sticky top-0">
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
            <span className="text-blue-500 stroke-blue-500">Categories</span>
          }>
          <Dropdown.Item>
            <Link href="/categories/cpu-processor"> CPU / Processor</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/categories/motherboard"> Motherboard</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/categories/ram"> RAM</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/categories/power-supply-unit"> Power Supply Unit</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/categories/storage-device"> Storage Device</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/categories/monitor"> Monitor</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/categories/others"> Others</Link>
          </Dropdown.Item>
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
