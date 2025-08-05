
import { useRouteError } from "react-router-dom"

function Error(){

const err = useRouteError();

    return(

  <>
    
    <h1>Opps...!!!!</h1>
    <h2>Page not found.....</h2>
    <p> {err.status} {err.statusText}</p>
    <p>{err.data}</p>
    
    </>

    )
  
}

export default Error;