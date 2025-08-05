import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./Conponent/style.css"
import BookList from './Conponent/BookList'
import { Books } from './utils/BookData'
import Book from './Conponent/Book'
import Header from './Conponent/Header'

function App() {

  const [searchText, setSeacrhText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);


  function handleSearch() {



    const filterBooks = Books.filter((book => book.title.toLowerCase().includes(searchText.toLowerCase())))


    setFilteredBooks(filterBooks)
  }
  return (
    <>
      <Header></Header>
      <h1>WELCOME TO LIBRARY</h1>
      <div className='search'>

        <h3>Search Books</h3>
        <input type='text' className='search-input' onChange={(e) => setSeacrhText(e.target.value)}></input>
        <button className='btn' onClick={handleSearch}>Search</button>
      </div>
    
      <BookList booksList={filteredBooks}></BookList>
    </>
  )
}

export default App
