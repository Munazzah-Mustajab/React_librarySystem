import "./addBook.css"

function AddBook(){

function handleAddBook(){

    alert("Addded");
    
}

    return(<>
    <h1>Add Books</h1>
    <form>
        <label className="label">Book Name</label>
        <input type ="text"></input>
        <label className="label">Author Name</label>
        <input type="text"></input>
        <label className="label">Description</label>
        <input type="text" width="600px"></input>
        
    </form>
    <button onClick={handleAddBook}>Add</button>
    </>)
}

export default AddBook