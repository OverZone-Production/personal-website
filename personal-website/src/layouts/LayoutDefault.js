import NavbarMobile from "../components/mobile/NavbarMobile"
import Navbar from "../components/Navbar"

const LayoutDefault = () => {

    return (
        <div className="layout-default">

            <Navbar />
            <NavbarMobile/>
  
            {/* <div className="first-section w-screen outline outline-2 h-96 mt-4 ">Image cover</div>
        
            <div className="second-section w-screen outline outline-2 h-60 mt-2 ">Personal Infomation</div>

            <div className="third-section w-screen outline outline-2 h-96 mt-2">Education</div>
        
            <div className="forth-section w-screen outline outline-2 h-96 mt-2">Stuff</div> */}

        </div>
    )
}

export default LayoutDefault