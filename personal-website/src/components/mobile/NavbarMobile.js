import { MdMenu } from "react-icons/md"
import {useState} from "react"
import { menuItems } from "../../assets/data/menu" 

const MenuItems = (props) => {
    const {name, link} = props
    return <a className="menu-item" href={link}>
       <div className="menu-detail text-yellow-300 text-lg px-2 py-3">
            {name}
        </div> 
    </a>
}

const RenderMenuItems = () => {
    return menuItems.map((item, idx) => <MenuItems name={item.name} link={item.link} key={idx} />)
}

const NavbarMobile = () => {
    const [isShow, setIsShow] = useState(false)

    return <>
        <div 
        className="navbar-mobile md:hidden w-screen h-16 bg-sky-500 outline outline-5 outline-yellow-500 flex justify-between py-3 px-1 max-w-sm">
            <div className="logo text-yellow-300 text-3xl font-bold ">Ping's world</div>
            <div 
                className="menu-icon cursor-pointer" 
                onClick = {() => setIsShow(!isShow)}
            >
                
                <MdMenu className="text-xl text-yellow-300" />
            </div>
        </div>

        <div className={`menuMobile absolute outline w-screen h-64 bg-sky-700 ${isShow ? "absolute" : "hidden"}`}>

            { RenderMenuItems() }

        </div>
    </>
}

export default NavbarMobile