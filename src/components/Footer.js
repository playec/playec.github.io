export default function Header(){

    const current = new Date()

    return <div id="footer">
        <div className="content">
            <ul className="list">
                <li><a href="/ubicacion">Ubicación</a></li>
                <li><a target="_blank" href="https://www.facebook.com/playecdigi">Facebook</a></li>
            </ul>
            <br></br>
            <sub>© {current.getFullYear()} Playec tienda minorista local de tecnología y videojuegos.</sub>
        </div>
    </div>
}