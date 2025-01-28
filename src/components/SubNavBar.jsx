import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NekasuLogo from "../assets/icons/Nekasu";
import UpArrow from "../assets/images/UpArrow.png";
import { Outlet } from "react-router";
import { Link } from "react-router";

function NavItem({ label, to }) {
  return (
    <Typography
      as={Link}
      to={to}
      color="blue-gray"
      className="p-1 font-medium font-poppins text-xl"
    >
      {label}
    </Typography>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-10 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-18">
      <NavItem to="https://nekasu.com/" label="Home" />
      <NavItem to="https://nekasu.com/pricing" label="Pricing" />
      <NavItem to="https://nekasu.com/contact" label="About Us" />
      <NavItem to="https://nekasu.com/about" label="Contact Us" />
    </ul>
  );
}

export function SubNavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar
      color="transparent"
      fullWidth
      className="h-[63.21px] flex items-center"
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div>
          <Link
            to="https://nekasu.com/"
            className="flex flex-row items-center gap-2"
          >
            <NekasuLogo />
            <span className="bg-gradient-to-b from-[#0EB059] to-[#134DE3] bg-clip-text text-transparent font-poppins font-bold text-2xl">
              Nekasu
            </span>
          </Link>
        </div>
        <div className="flex flex-row gap-6">
          <div className="hidden lg:block">
            <NavList />
          </div>
          <button className="flex flex-row items-center gap-x-2">
            <span className="bg-gradient-to-b from-[#03FC6C] to-[#6064DC] bg-clip-text text-transparent font-poppins font-semibold text-2xl">
              Register
            </span>
            <div>
              <img src={UpArrow} alt="UpArrow" />
            </div>
          </button>
        </div>
      </div>
    </Navbar>
  );
}

export default SubNavBar;
