
import "./style.css"
import { Link, useNavigate } from "react-router-dom"
import BookDetailsk from "./BookDetails"
import BookDetails from "./BookDetails"
function Book(props) {
    const navigate = useNavigate();
    
    function handleDetails(itemId) {

        navigate(`/details/${itemId}`);
    }

    return (

        <div className="book-card">

            <img src={props.bookDetails.url} alt="" width="200px" height="200px" className="book-cover"></img>

            <div className="book-details">
                <h2 className="bookTitle">{props.bookDetails.title}</h2>
                {/* <p className="author">{props.bookDetails.author}</p>
      <p className="desc">{props.bookDetails.Description}</p> */}

                <button onClick={handleDetails(props.id)}>View details</button>

            </div>

        </div>)
}
export default Book