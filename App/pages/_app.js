import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={Component.name === "Home" || Component.name === "Custom404" || Component.name === "Register" || Component.name === "login" ? "bg-cover bg-mountains md:bg-fixed lg:bg-contain h-screen scrollbar" : Component.name === "products" ? " h-screen scrollbar bg-cover bg-shape md:bg-fixed lg:bg-contain w-full": "h-screen" }>
        { Component.name !== "temp" ? 
        <Layout>
          <Component {...pageProps} />
        </Layout> :
        <Component {...pageProps} />
        }
         
      </div>
    </>
  )
}

export default MyApp
