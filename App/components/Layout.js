import Navbar from "./Navbar"
const Layout = ( {children} ) => {
    return (
        <div className="mt-3 my-5 mx-6 md:mt-8 md:my-10 md:mx-16">
            <Navbar/>
            <div className="mt-10 md:mt-20 md:my-10 md:mx-16">
                {children}
            </div>
        </div>
    )
}

export default Layout
