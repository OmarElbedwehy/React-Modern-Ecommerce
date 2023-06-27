import { useState } from "react"
import logo from "../assets/logo.png"

const Header = () => {
    const [headerOpened, setHeaderOpened] = useState(false)

    return (
        <header className="header_container">
            <div className="header_logo">
                <img src={logo} alt="logo" />
                <span>Amazon</span>
            </div>
            <nav>
            <svg className="bars" onClick={() => setHeaderOpened(!headerOpened)} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 12 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
                <ul className={`header_menu ${headerOpened ? "open" : ""}`}>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Brands</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Sales</a></li>
                    <li><a href="#">ENG</a></li>
                </ul>
                <input type="text" placeholder="Search" className="search_input" />
                <svg className="bag" stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z" fill="currentColor"></path></svg>
            </nav>
        </header>
    )
}

export default Header