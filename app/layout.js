import "../styles/global.css";
import PropTypes from "prop-types";
import React from "react";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "BOTOL - Premium Water Bottles",
    template: "BOTOL - Premium Water Bottles | %s",
  },
  description:
    "Discover BOTOL premium water bottles - your ultimate hydration companion. Shop vacuum bottles, borosilicate bottles, kettles & more. Health, happiness & sustainability.",
  keywords:
    "premium water bottles, vacuum bottles, borosilicate bottles, hydration, sustainable bottles, BOTOL, kettles, fridge bottles",

  openGraph: {
    type: "website",
    title: {
      default: "BOTOL - Premium Water Bottles",
      template: "BOTOL - Premium Water Bottles | %s",
    },
    description:
      "Shop premium water bottles at BOTOL. Discover vacuum bottles, borosilicate options & more for ultimate hydration. Health-focused & sustainable.",
  },
};
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
