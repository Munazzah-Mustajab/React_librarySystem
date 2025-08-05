import "./Header.css"
import { Link } from "react-router-dom";
function Header(){

    return(<div className="header">
    
    <ul>

        <a href="/">Home</a>
        <a href="/BrowseBooks">Browse Books</a>
        <Link to="/addBooks">AddBook</Link>
    </ul>
    
    </div>)
}

export default Header;