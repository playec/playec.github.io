'use client'

import { useState } from "react"
import Link from "next/link"
import navbar from "@/menus/navbar.json"

export default function Header(){
    
    const [ toggle, setToggle ] = useState(false)

    return <div id='header'>
        <div className='content'>
            <div className="navbar">
                <div className="nav-brand">
                    <Link href='/'><img style={{width:200}} src='/logo-editor.png'></img></Link>
                </div>
                <div className="nav-side navbar-menu right">
                    <label id="menu-toggle">
                        <button className="menu-btn" onClick={() => setToggle(toggle ? false : true)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                    </label>
                </div>
                <div className={toggle ? "nav-side navbar-toggle show" : "nav-side navbar-toggle"}>
                    <ul className="menu">
                        {navbar.body.map((item, index) => (
                            <li key={index}><Link href={item.slug}>{item.title}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>

}