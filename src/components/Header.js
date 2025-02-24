export default function Header(){
    return <div id='header'>
        <div className='content'>
            <div className="navbar">
                <div className="nav-brand">
                    <a href='/'><img style={{width:200}} src='/logo-editor.png'></img></a>
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
                        <li><a href="/">Tienda</a></li>
                        <li><a href="/nosotros">Nosotros</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}