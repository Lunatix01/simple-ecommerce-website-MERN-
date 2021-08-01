import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={Component.name === "Home" ? "bg-mountains bg-fixed bg-contain h-screen scrollbar" : "h-screen"}>
        <div className="">
        <Layout className="">
          {console.log(Component.name)}
      <Component {...pageProps} />
    </Layout>
        </div>
      </div>
    </>
  )
}

export default MyApp
