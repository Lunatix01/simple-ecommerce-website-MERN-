import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    {console.log(Component.name)}
      <div className={Component.name === "Home" || Component.name === "Custom404" ? "bg-cover bg-mountains md:bg-fixed lg:bg-contain h-screen scrollbar" : "h-screen"}>
        <Layout>
          <Component {...pageProps} /> 
        </Layout>  
      </div>
    </>
  )
}

export default MyApp
