import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={Component.name === "Home" || "Error" ? "bg-cover bg-mountains md:bg-fixed lg:bg-contain h-screen scrollbar" : "h-screen"}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  )
}

export default MyApp
