import { useDispatch, useSelector } from "react-redux"
import { setSearch } from "../features/bookSlice"


const Search = () => {
  const search = useSelector(state => state.bookReducer.search)
  const dispatch = useDispatch()
  console.log(search)
  const handleChange = (e) => {
     dispatch(setSearch(e.toLowerCase()))
  }
  return (
    <div>
        <input type="text" placeholder="search" value={search} onChange={(e)=>handleChange(e.target.value)}/>
    </div>
  )
}

export default Search