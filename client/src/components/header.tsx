import { Link } from "react-router";

const Header = () => {
  const NAV_ITEMS = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "/contact" },
    { name: "Services", url: "/services" },
  ];

  return (
    <header className=" py-10 fixed top-0 left-0 w-full z-50">
      <div className=" my-container flex items-center justify-between">
        <nav className=" flex gap-2.5">
          {NAV_ITEMS.map((item, index) => (
            <Link
              to={item.url}
              key={index}
              className=" rounded-full py-2.5 px-5 border-my-purple border hover:bg-my-purple transition-all duration-300 text-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className=" rounded-full py-2.5 px-5 border-my-purple border bg-my-purple hover:bg-transparent transition-all duration-300 cursor-pointer text-nowrap">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
