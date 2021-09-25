import '../styles/globals.css'
import '../styles/styles.css'
import { Fragment } from "react"

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <header>
        <nav>
          <ul className="flex justify-between items-center p-8 bg-pink-100">
            <li>
              <a href="/" className="text-red-500 no-underline">
                Home
              </a>

              <a href="/about" className="text-red-500 no-underline p-8">
                About
              </a>

              <a href="/blog" className="text-red-500 no-underline">
                Blog
              </a>
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
    </Fragment>
  );
}

export default MyApp






