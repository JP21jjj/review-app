import '../styles/globals.css'
import '../styles/styles.css'
import { Fragment } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <><ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={true}
      draggable={true}
      closeOnClick
      pauseOnHover />
      <Fragment>
        <header>
          <nav>
            <ul className="flex justify-between items-center p-8 bg-pink-100">
              <li>
                <Link  href="/">
                <a className="text-red-500 no-underline">
                  Home
                </a>
                </Link>

                <Link href="/about">
                <a className="text-red-500 no-underline p-8">
                  About
                </a>
                </Link>

                <Link href="/blog">
                <a className="text-red-500 no-underline">
                  Blog
                </a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer className="bg-red-300 flex justify-center items-center py-4">
          <p>Next.js is so cool!</p>
        </footer>
      </Fragment></>
  );
}

export default MyApp