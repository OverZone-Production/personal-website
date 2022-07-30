import FirstSection from "../components/FirstSection"
import NavbarMobile from "../components/mobile/NavbarMobile"
import Navbar from "../components/Navbar"
import SecondSection from "../components/SecondSection"

const LayoutDefault = () => {

    return (
        <div className="layout-default">

            <Navbar />
            <NavbarMobile/>
  
            {/* FirstSection */}
            <FirstSection />

            {/* SecondSection */}
            <SecondSection />

        </div>
    )
}

export default LayoutDefault