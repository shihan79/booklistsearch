import { createSlice } from '@reduxjs/toolkit'




export const bookSlice = createSlice({
  name: 'book',
  initialState:{
    books : [
        {id:1, title:'bangladesh', author:'mujib'},
        {id:2, title:'india', author:'modi'}
    ],
    search : ''
  },
  reducers: {
    showBooks : (state) => state,
    addBook : (state,action) => {
        state.books = [...state.books,action.payload]
    },
    updateBook : (state,action) => {
        const {id,title,author} = action.payload
        const theBook = state.books.filter(book => book.id == id)
       if(theBook){
        theBook[0].title = title
        theBook[0].author = author
       }
        
             
    },
    deleteBook : (state,action) =>{
       state.books = state.books.filter(book => book.id != action.payload)
    },
    setSearch : (state,action) => {
      state.search = action.payload
    }
  },
})


export const { showBooks,addBook,updateBook,deleteBook,setSearch } = bookSlice.actions

export default bookSlice.reducer