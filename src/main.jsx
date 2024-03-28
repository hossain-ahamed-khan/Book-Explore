import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import ReadBook from './components/ReadBook/ReadBook';
import WishlistBook from './components/WishlistBook/WishlistBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('books.json')
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../books.json'),
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
