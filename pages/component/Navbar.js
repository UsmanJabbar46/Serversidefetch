import Link from "next/link";
import React from 'react';

function Navbar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/component/contact/contact">Contact</Link>
    </div>
  );
}

export default Navbar;

