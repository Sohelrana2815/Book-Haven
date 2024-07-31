import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home/Home";
import BookDetails from "../Components/BookDetails/BookDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        loader: () => fetch("/books.json"),
      },
    ],
  },
]);

export default router;
