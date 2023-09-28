import { useDispatch, useSelector } from "react-redux"
import { addBook } from "../../features/bookSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const AddBook = () => {
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const navigate = useNavigate()
  const numberOfBooks = useSelector(state => state.bookReducer.books.length)
  console.log(numberOfBooks)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
        e.preventDefault()
        const newBook = {id:numberOfBooks + 1,title,author}       
        dispatch(addBook(newBook))
        navigate('/show-books',{replace:true})

  }
  return (
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="">Title</label>
   <input type="text" placeholder="" value={title} onChange={(e)=> setTitle(e.target.value)}/>
    </div>
    <div>
    <label htmlFor="">Author</label>
   <input type="text" placeholder="" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
    </div>
    <button type="submit">Submit</button>
  </form>
  )
}

export default AddBook