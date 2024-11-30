import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const Navbar = () => {
 const  navitem = [
    {
      name: "Works",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];
  return (
    <div>
      <ul
        className={`${inter.className} m-[66px] flex justify-end h-[24px] font-medium text-[20px] space-x-6`}
      >
        {navitem.map((item) => (
          <li key={item.name}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
        {/* <li>Works</li>
        <li>Blog</li>
        <li>Contact</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
