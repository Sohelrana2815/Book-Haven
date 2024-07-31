import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localStorage";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBooksCard from "../ListedBooksCard/ListedBooksCard";

const ListedBooks = () => {
  const books = useLoaderData(); // load all book data from loader

  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  useEffect(() => {
    const { readList, wishlist } = getStoredBooks();

    if (books.length > 0) {
      // Filter read books
      const filteredReadBooks = books.filter((book) =>
        readList.includes(book.id)
      );
      setReadBooks(filteredReadBooks);

      // Filter wishlist books
      const filteredWishlistBooks = books.filter((book) =>
        wishlist.includes(book.id)
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
          <TabPanel>
            <div>
              {readBooks.length > 0 ? (
                readBooks.map((book) => (
                  <ListedBooksCard key={book.id} book={book}></ListedBooksCard>
                ))
              ) : (
                <p>No book in the read book</p>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {wishlistBooks.length > 0 ? (
                wishlistBooks.map((book) => (
                  <ListedBooksCard key={book.id} book={book}></ListedBooksCard>
                ))
              ) : (
                <p>No book in the Wishlist book</p>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ListedBooks;
