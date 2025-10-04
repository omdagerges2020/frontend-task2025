"use client";

import Link from "next/link";
import logoImg from "../../public/logo.png";
import homeIcon from "../../public/home.png";
import categoryIcon from "../../public/category.png";
import aboutIcon from "../../public/about.png";
import contactIcon from "../../public/contact.png";
import faqIcon from "../../public/faq.png";

import {
  Handbag ,
  Bell,
  Heart,
  User,
  Menu,
  ChevronDown,
} from "lucide-react";
import {
  IconButton,
  Menu as MTMenu,
  MenuHandler,
  MenuList,
  MenuItem,
  Drawer,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home", icon: homeIcon },
  { href: "/ourCategory", label: "Our Category", icon: categoryIcon  },
  { href: "/about", label: "About Us", icon: aboutIcon  },
  { href: "/contact", label: "Contact Us", icon: contactIcon  },
  { href: "/faq", label: "FAQs", icon: faqIcon  },
];

const languages = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
  { code: "FR", label: "Français" },
  { code: "DE", label: "Deutsch" },
];

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <nav className="bg-[#FFFFFF] rounded-t-xl shadow-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-[3em]">
        {/* Left side: Logo + Navigation Links (Desktop) */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logoImg} alt="Tinytales"/>
          </Link>

          {/* Navigation Links (Desktop only) */}
          <div className="hidden md:hidden lg:hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-normal flex gap-1 text-[#8A8A8A] transition-colors hover:text-gray-900"
              >
                <Image src={link?.icon} alt={link.label} width={19} height={19} className="font-normal text-[#8A8A8A]"/>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side: Icons + Dropdowns (Desktop) or Burger Menu (Mobile) */}
        <div className="md:hidden">
          <IconButton variant="text" onClick={() => setIsDrawerOpen(true)}>
            <Menu className="size-5" />
          </IconButton>

          <Drawer
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            placement="right"
            className="p-4"
          >
            <div className="mb-6 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                Menu
              </Typography>
            </div>

            <div className="flex flex-col gap-4">
              {/* Mobile Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-900 hover:text-blue-600"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="my-2 h-px bg-gray-200" />

              {/* Mobile Auth Links */}
              <Link
                href="/login"
                className="text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsDrawerOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-base font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsDrawerOpen(false)}
              >
                Register
              </Link>
            </div>
          </Drawer>
        </div>

        <div className="hidden md:flex items-center text-[#020202] gap-1">
          {/* Cart Icon */}
          <IconButton variant="text" href="/cart">
            <Handbag  className="size-5" />
          </IconButton>

          {/* Notification Bell Icon */}
          <IconButton variant="text" href="/notifications">
            <Bell className="size-5" />
          </IconButton>

          {/* My Favorites Icon */}
          <IconButton variant="text" href="/favorites">
            <Heart className="size-5" />
          </IconButton>

          {/* Language Dropdown */}
          <MTMenu>
            <MenuHandler>
              <Button className="flex bg-transparent shadow-none hover:shadow-none items-center gap-1 px-0 py-2 text-sm font-medium text-[#020202] hover:text-gray-900">
                EN
                <ChevronDown className="size-4 opacity-100" />
              </Button>
            </MenuHandler>
            <MenuList>
              {languages.map((lang) => (
                <MenuItem key={lang.code}>{lang.label}</MenuItem>
              ))}
            </MenuList>
          </MTMenu>

          {/* Account Dropdown */}
          <MTMenu>
            <MenuHandler>
              <Button className="flex bg-transparent shadow-none hover:shadow-none items-center gap-1 px-0 py-2 text-sm font-medium text-[#020202] hover:text-gray-900">
                <User className="size-5" />
                <ChevronDown className="size-4 opacity-100" />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <Link href="/login">Login</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/register">Register</Link>
              </MenuItem>
            </MenuList>
          </MTMenu>
        </div>
      </div>
    </nav>
  );
}
