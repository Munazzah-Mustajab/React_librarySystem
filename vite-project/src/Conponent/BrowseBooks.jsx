import { Books } from "../utils/BookData";
import { useState } from "react";
import Book from "./Book";
import BookList from "./BookList";
import "./style.css"
import { useNavigate } from "react-router-dom";
import "./style.css"

function BrowseBooks() {

    const [searchInput, setSeacrhText] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(Books);
    function handleSearch() {

        const filterBooks = Books.filter((book => book.title.toLowerCase().includes(searchInput.toLowerCase())))


        setFilteredBooks(filterBooks)

    }
const navigate = useNavigate();
    function handleback(){
         
         navigate('/');
    }
    console.log(searchInput);
    return (<>

        <h1>Browse Books</h1>
        <div className='search'>

            <h3>Search Books</h3>
            <input type='text' className='search-input' onChange={(e) => setSeacrhText(e.target.value)}></input>
            <div className="btn-container"> 
                <button className='btn' onClick={handleSearch}>Search</button>
                <button className='btn' onClick={handleback}>Back</button>
            </div>

        </div>
        <BookList booksList={filteredBooks}></BookList>
    </>)
}

export default BrowseBooks;