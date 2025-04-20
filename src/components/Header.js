import Link from "next/link"
import navbar from "@/menus/navbar.json"

export default function Header(){
    
    return <div id='header'>
        <div className='content'>
            <div className="navbar">
                <div className="nav-brand">
                    <Link href='/'><img style={{width:200}} src='/logo-editor.png'></img></Link>
                </div>
                <div className="nav-side navbar-menu right">
                    <label id="menu-toggle">
                        <button className="menu-btn">
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                    </label>
                </div>
                <div className="nav-side navbar-toggle">
                    <ul className="menu">
                        {navbar["main-menu"].body.map((item, index) => (
                            <li key={index}><Link href={item.slug}>{item.title}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>

}