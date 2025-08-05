import Book from "./Book";
import "./style.css"
import { Link } from "react-router-dom";
function BookList(props) {
 console.log("props",props);
    return (
   
<div className="bookList">


  {props.booksList.map((data)=>(
     <Link to={`/book/${data.id}`}> <Book key = {data.id} bookDetails={data}></Book></Link>
   

   ))} 
</div>
 
  

   
    )
}
export default BookList