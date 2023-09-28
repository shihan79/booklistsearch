import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import Home from "./components/pages/Home"
import BooksView from "./components/pages/BooksView"
import AddBook from "./components/pages/AddBook"
import EditBook from "./components/pages/EditBook"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="show-books" element={<BooksView />} />
      <Route path="add-book" element={<AddBook />} />
      <Route path="edit-book" element={<EditBook />} />
      
    </Route>
  )
)

function App() {
 

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
