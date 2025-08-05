import Book from "./Book";
import { Books } from "../utils/BookData";
import { useNavigate, useParams } from "react-router-dom";

function BookDetails(props){


    const params = useParams();
   const book = Books.filter(book=>book.id==params.id);
   console.log(book)
    const navigate = useNavigate();
   function handleBack(){
      
    navigate(`/browseBooks`);
   }
    return(<>
    
      <h3>{`Book Details for Book with Id ${params.id}`}</h3>
      {book.map(book=>{
         return(<>
          <h3>{book.title}</h3>
          <h3>{book.author}</h3>
          <img src ={book.url}  width="400px" height="500px"></img>
          <p>{book.Description}</p>
          <button onClick={handleBack}>Back to Browse</button>
         </>)
       
      })}

      
      
    </>)
}
export default BookDetails