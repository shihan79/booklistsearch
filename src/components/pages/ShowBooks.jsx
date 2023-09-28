import { useDispatch, useSelector } from "react-redux"
import { deleteBook } from "../../features/bookSlice"
import { Link } from "react-router-dom"
import Search from "../Search"


const ShowBooks = () => {
  const books = useSelector(state => state.bookReducer.books)
  const search = useSelector(state => state.bookReducer.search)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
       dispatch(deleteBook(id))
  }
  return (
    <div>
      <h2>List of Books</h2>
       <Search />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>author</th>
            <th>action</th>
          </tr>
        </thead>        
        <tbody>                 
             {books && books.filter((book) => book.title.toLowerCase().startsWith(search)).map((book,index) => {
              const {id,title,author} = book
              return  <tr key={index}>
                <td>{index+1}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td>
                  <Link to='/edit-book'state={{id,title,author}} ><button>edit</button></Link>
                  <button onClick={()=>handleDelete(id)} >delete</button>
                </td>
              </tr>
      
              
             })}
        </tbody>
        </table>
     
    </div>
  )
}

export default ShowBooks