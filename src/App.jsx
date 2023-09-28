import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import Home from "./components/pages/Home"

import AddBook from "./components/pages/AddBook"
import EditBook from "./components/pages/EditBook"
import ShowBooks from "./components/pages/ShowBooks"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="show-books" element={<ShowBooks />} />
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
