import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter ,RouterProvider}  from "react-router-dom"
import BookList from './Conponent/BookList.jsx'
import BrowseBooks from './Conponent/BrowseBooks.jsx'
import AddBook from './Conponent/AddBook.jsx'
import Error from './Conponent/Error.jsx'
import BookDetails from './Conponent/BookDetails.jsx'

//Creating Routing Configuration 

const appRouter = createBrowserRouter(
[
 
  {

    path :"/",
    element:<App></App>,
    errorElement : <Error></Error>
  },

  {

    path : "/BrowseBooks",
    element:<BrowseBooks ></BrowseBooks>,
    errorElement : <Error></Error>
  },

  {
    path : "addBooks",
    element:<AddBook></AddBook>,
    errorElement : <Error></Error>
  },
  {

    path : "/book/:id",
    element:<BookDetails></BookDetails>,
     errorElement : <Error></Error>
  }
 

]


)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
