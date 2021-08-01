import Navbar from "./components/Navbar"
import Home from "./components/Home"
function App () {
  return <> 
    <div className="scrollbar-hide h-screen m-0 bg-fixed bg-contain bg-mountains">
      <div className="my-10 mx-16">
        <Navbar />
      </div>
      <div className="mt-20 my-10 mx-16">
        <Home />
      </div>
    </div>
  </>

}

export default App