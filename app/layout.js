import "./../styles/global.scss";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className="header-nav">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="product">Product</Link>
            </li>
          </ul>
        </nav>
        {children}
        <div className="site-footer">
          <p>All rights reserved by Manish Kumar &copy;</p>
        </div>
      </body>
    </html>
  );
}
