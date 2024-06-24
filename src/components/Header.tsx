"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import "../app/globals.css";
import "../app/sass/Header.scss";
import MenuCarousel from "./MenuCarousel";

function Header() {
  const [openProducts, setOpenProducts] = useState(false);
  const [openInspire, setOpenInspire] = useState(false);

  return (
    <>
      <>
        <div className="header-promo">
          <p className="font-semibold">(305) 602 2330 CALL US - 98% of orders ship in 48 hours - The Best in Waterproof Flooring</p>
        </div>

        <header className="desktop-header">
          <div>
            <Link href="/">
              <Image
                className="header-desktop-logo"
                alt="CPF Floors logo"
                src="./header_desktop_logo.svg"
                height={70}
                width={70}
              ></Image>
            </Link>
          </div>
          <nav className="desktop-nav">
            <div className="composed-link flex">
              <Link href="/products">Products</Link>
              <Image
                onClick={() => setOpenProducts(!openProducts)}
                src="/menu-arrow.svg"
                height={14}
                width={14}
                alt=""
              ></Image>
            </div>

            <Link href="/dealer-locator">Dealer Locator</Link>
            <Link href="/order-samples">Order Sample</Link>
            <Link href="/about-us">About Us</Link>

            <div className="composed-link flex">
              <Link href="/get-inspired">Get Inspired</Link>
              <Image
                onClick={() => setOpenInspire(!openInspire)}
                src="/menu-arrow.svg"
                height={14}
                width={14}
                alt=""
              ></Image>
            </div>

            <Link href="/contact-us">Contact Us</Link>
          </nav>
          <Link href="/become-a-dealer" className="button-dark">
            Become a Dealer
          </Link>
        </header>

        {/*OPEN PRODUCTS SECTION*/}

        <AnimatePresence initial={false}>
          {openProducts && (
            <motion.div
              className="products-menu"
              initial={{ height: 0 }}
              animate={{ height: 600 }}
              exit={{ height: 0 }}
            >
              <div className="menu-products-carousel">
                <MenuCarousel />
              </div>
              <div className="product-menu-links-container">
                <div className="links-container">
                  <h3>Collections</h3>
                  <Link href="#">Deco54</Link>
                  <Link href="#">Quick48+</Link>
                  <Link href="#">Project</Link>
                  <Link href="#">Spirit XL</Link>
                  <Link href="#">Alpha</Link>
                  <Link href="#">Supreme</Link>
                  <Link href="#">Evolve</Link>
                </div>

                <div className="links-container">
                  <h3>Room Type</h3>
                  <Link href="#">Kitchen</Link>
                  <Link href="#">Bathroom</Link>
                  <Link href="#">Living Area</Link>
                  <Link href="#">Basement</Link>
                  <Link href="#">Light Commercial</Link>
                </div>

                <div className="links-container">
                  <h3>More Products</h3>
                  <Link href="#">Baseboards</Link>
                  <Link href="#">Underlayment</Link>
                  <Link href="#">Steps</Link>
                  <Link href="#">Moldings</Link>
                  <Link href="#">Whisper Matt</Link>
                </div>
              </div>



            </motion.div>
          )}
        </AnimatePresence>

        {/*OPEN GET INSPIRED SECTION*/}

        <AnimatePresence initial={false}>
          {openInspire && (
            <motion.div
              className="inspired-menu"
              initial={{ height: 0 }}
              animate={{ height: 400 }}
              exit={{ height: 0 }}
            ></motion.div>
          )}
        </AnimatePresence>
      </>



      {/*MOBILE HEADER*/}

      <>
          <div className="mobile-header">
          <div>
            <Link href="/">
              <Image
                className="header-mobile-logo"
                alt="CPF Floors logo"
                src="./header_desktop_logo.svg"
                height={70}
                width={70}
              ></Image>
            </Link>
          </div>

          <div className="menu-bar">
            <Image src="/menu-bar.svg" height={40} width={40} alt="menu bar"></Image>
          </div>
          </div>
      
      
      </>
    </>
  );
}

export default Header;