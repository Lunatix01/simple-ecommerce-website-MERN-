import Navbar from "./Navbar"
const Layout = ( {children} ) => {
    return (
        <div className="mt-8 my-10 mx-16 ">
            <Navbar/>
            <div className="mt-20 my-10 mx-16 ">
                {children}
            </div>
        </div>
    )
}

export default Layout
