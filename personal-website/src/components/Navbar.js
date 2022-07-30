import { menuItems } from "../assets/data/menu"

const NavItem = (props) => {
    const {name, link} = props

    return <a className="navItem decoration-none" href={link}>
        <div className="menuName text-[#F2CF8D] text-xl font-bold hover:text-white hover:underline hover:animate-pulse">{name}</div>
    </a>
}

const RenderNavItems = () => {
    return <div className="nav-item-container flex gap-3 justify-center items-center py-3">
        {menuItems.map((item, idx) => <NavItem name={item.name} link={item.link} key={idx} />)}
    </div> 
    
    
}

const Navbar = () => {
    return <>
        <div className="navbar w-screen h-16 outline outline-[#F2CF8D] bg-[#292759] hidden md:block">
            {RenderNavItems()}
        </div>
    </>
}

export default Navbar