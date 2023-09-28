import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { updateBook } from "../../features/bookSlice"


const EditBook = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [id] = useState(location.state.id)
  const [title,setTitle] = useState(location.state.title)
  const [author,setAuthor] = useState(location.state.author)
  
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
       e.preventDefault()
      dispatch(updateBook({id,title,author}))
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
     <button type="submit">Update</button>
   </form>
  )
}

export default EditBook