import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStoredBooks,
  saveToReadList,
  saveToWishList,
} from "../../Utility/localStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  // console.log(books, idInt);

  const book = books.find((book) => book.id === idInt);
  const handleReadClick = () => {
    const { readList } = getStoredBooks();
    if (readList.includes(book.id)) {
      toast.error("You have already added this book to the read list.");
    } else {
      saveToReadList(book.id);
      toast.success("Book added to read list.");
    }
  };
  const handleWishlistClick = () => {
    const { readList, wishlist } = getStoredBooks();
    if (readList.includes(book.id)) {
      toast.error(
        "You have already added this book to the read list and cannot add it to the wishlist."
      );
    } else if (wishlist.includes(book.id)) {
      toast.error("You have already added this book to the wishlist.");
    } else {
      saveToWishList(book.id);
      toast.success("Book added to wishlist.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <ToastContainer />
      <div className="w-full lg:w-2/5 p-2">
        <img src={book.image} alt={book.bookName} className="w-full" />
      </div>
      <div className="w-full lg:w-3/5 p-4">
        <h1 className="text-4xl font-bold font-playfair">{book.bookName}</h1>
        <p className="text-lg">By : {book.author}</p>
        <div className="divider"></div>
        <p>{book.category}</p>
        <div className="divider"></div>
        <p>Review : {book.review}</p>
        <p>
          Tag{" "}
          {book.tags.map((tag, index) => (
            <span key={index}> # {tag}</span>
          ))}
        </p>
        <div className="divider"></div>
        <div className="space-y-6">
          <p>Number of pages : {book.totalPages}</p>
          <p>Publisher : {book.publisher}</p>
          <p>Year of Publishing : {book.yearOfPublishing}</p>
          <p>Rating : {book.rating}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleReadClick}
              className="btn btn-outline hover:bg-green-500 px-8"
            >
              Read
            </button>
            <button
              onClick={handleWishlistClick}
              className="btn btn-info border-none px-8"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
