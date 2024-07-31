import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localStorage";
import { Tab, TabList, Tabs } from "react-tabs";

const ListedBooks = () => {
  const books = useLoaderData(); // load all book data from loader

  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  useEffect(() => {
    const { readList, wishList } = getStoredBooks();

    if (books.length > 0) {
      // filter read books
      const filteredReadBooks = books.filter((book) =>
        readList.includes(book.id)
      );
      setReadBooks(filteredReadBooks);

      // filter wishlist books

      const filteredWishlistBooks = books.filter((book) =>
        wishList.includes(book.id)
      );
      setWishlistBooks(filteredWishlistBooks);
    }
  }, [books]);

  return (
    <>
      <div className="container mx-auto mt-8">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
        </Tabs>
      </div>
    </>
  );
};

export default ListedBooks;
