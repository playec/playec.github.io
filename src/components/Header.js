export default function Header(){
    return <div id='header'>
        <div className='content'>
            <div className="navbar">
                <div className="nav-brand">
                <a href='/'><img src='/logo-editor.png'></img></a>
                </div>
                <div className="nav-side">
                    <ul className="menu">
                        <li><a href="/">Tienda</a></li>
                        <li><a href="/nosotros">Nosotros</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}