import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const name = Component.name
  return (
    <>
      <div className={Component.name === "Home" || Component.name === "Custom404" || Component.name === "Register" || Component.name === "login" ? "bg-cover bg-mountains md:bg-fixed lg:bg-contain h-screen scrollbar" : Component.name === "products" ? " h-screen scrollbar bg-cover bg-shape md:bg-fixed lg:bg-contain w-full": "h-screen" }>
        <Layout>
          <Component {...pageProps} />
        </Layout>  
      </div>
    </>
  )
}

export default MyApp
