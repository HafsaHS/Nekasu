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
import { Outlet } from "react-router";

function NavItem({ label }) {
  return (
    <a href="#">
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-medium font-poppins text-xl"
      >
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-20 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-28">
      <NavItem label="Home" />
      <NavItem label="Pricing" />
      <NavItem label="About Us" />
      <NavItem label="Contact Us" />
    </ul>
  );
}

export function NavbarWithSimpleLinks() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar color="transparent" fullWidth>
      <Outlet />
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex flex-row items-center gap-2">
          <NekasuLogo />
          <Typography
            as="h1"
            color="blue-gray"
            className="text-2xl font-bold font-poppins text-[#134DE3] "
          >
            Nekasu
          </Typography>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <button
          color="text-[#6064DC] font-poppins text-2xl"
          className="hidden lg:inline-block"
          variant="text"
        >
          Register
        </button>
        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-white py-2">
          <NavList />
          <Button variant="text">Register</Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarWithSimpleLinks;
