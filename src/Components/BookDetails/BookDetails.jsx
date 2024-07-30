import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  console.log(books, idInt);

  const book = books.find((book) => book.id === idInt);
  console.log(book);
  const [bookStatus, setBookStatus] = useState({
    read: false,
    wishlist: false,
  });

  const handleReadClick = () => {
    if (bookStatus.read) {
      toast.error("You have already added this book to the read list.");
    } else {
      setBookStatus({ ...bookStatus, read: true });
      toast.success("Book added to read list.");
    }
  };

  const handleWishlistClick = () => {
    if (bookStatus.read) {
      toast.error(
        "You have already added this book to the read list and cannot add it to the wishlist."
      );
    } else if (bookStatus.wishlist) {
      toast.error("You have already added this book to the wishlist.");
    } else {
      setBookStatus({ ...bookStatus, wishlist: true });
      toast.success("Book added to wishlist.");
    }
  };

  return (
    <div className="flex gap-6">
      <ToastContainer />
      <div className="w-2/5 border-4 p-2">
        <img src={book.image} alt={book.bookName} className="w-full" />
      </div>
      <div className="w-3/5 border-4 p-4">
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
          <div>
            <button
              onClick={handleReadClick}
              className="btn btn-outline hover:bg-green-500 px-8"
            >
              Read
            </button>
            <button
              onClick={handleWishlistClick}
              className="btn btn-info border-none px-8 ml-4"
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
