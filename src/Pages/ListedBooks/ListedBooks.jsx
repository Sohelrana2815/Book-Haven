import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localStorage";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("read");

  useEffect(() => {
    const { readList, wishList } = getStoredBooks();
    if (books.length > 0) {
      const readBooksList = books.filter((book) => readList.includes(book.id));
      const wishListBookList = books.filter((book) =>
        wishList.includes(book.id)
      );
      setReadBooks(readBooksList);
      setWishlistBooks(wishListBookList);
    }
  }, [books]);

  //   console.log(books);
  return (
    <div>
      
    </div>
  );
};

export default ListedBooks;
