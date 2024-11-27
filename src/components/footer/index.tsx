import Image from "next/image";
import Link from "next/link";
import React from "react";
import assetsBgImage from "../../../public/images/logo";
import { LuFacebook, LuLinkedin, LuGithub } from "react-icons/lu";
import { FaSquareXTwitter } from "react-icons/fa6";
import { logoColor } from "@/components/footer/constants/data";

const Footer = () => {
  const { logo } = assetsBgImage;
  const { ggColor, appColor } = logoColor;

  return (
    <footer className="container mx-auto sm:px-6 lg:px-8 py-12">
      {/* <div className="container mx-auto sm:px-6 lg:px-8 py-12"> */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-8">
          {/* Logo và giới thiệu */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center mb-4">
              <Image alt="logo" width={52} height={52} src={logo} />
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              The Next-Level Solutions for Landing Pages. Perfect Touch Enhances
              your Business.
            </p>
            <hr className="mb-4" />
            <div className="flex justify-start">
              <Link
                className="flex items-center gap-1 bg-primary-color mr-1 text-white shadow-md p-2 rounded-lg"
                href="/"
              >
                <LuFacebook size={20} />
              </Link>
              <Link
                className="flex items-center gap-1 bg-primary-color mr-1 text-white shadow-md p-2 rounded-lg"
                href="/"
              >
                <FaSquareXTwitter size={20} />
              </Link>
              <Link
                className="flex items-center gap-1 bg-primary-color mr-1 text-white shadow-md p-2 rounded-lg"
                href="/"
              >
                <LuLinkedin size={20} />
              </Link>
              <Link
                className="flex items-center gap-1 bg-primary-color mr-1 text-white shadow-md p-2 rounded-lg"
                href="/"
              >
                <LuGithub size={20} />
              </Link>
            </div>
          </div>

          {/* Links hữu ích */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-primary-color transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-primary-color transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-primary-color transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-primary-color transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-primary-color transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ sản phẩm */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Help</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-700 hover:text-primary-color transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-700 hover:text-primary-color transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-700 hover:text-primary-color transition"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-700 hover:text-primary-color transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-primary-color transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Tải xuống */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download</h3>
            <div className="mb-4">
              <Image alt="Google Play" width={190} height={57} src={ggColor} />
            </div>
            <div>
              <Image alt="App Store" width={190} height={57} src={appColor} />
            </div>
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
