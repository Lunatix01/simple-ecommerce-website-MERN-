import Navbar from "./components/Navbar"
import Home from "./components/Home"
function App () {
  return <> 
    <div className="my-10 mx-16 h-screen overflow-x-hidden">
      <div className="">
        <Navbar />
      </div>
      <div className="mt-20">
        <Home />
      </div>
      
    </div>
  </>

}

export default App