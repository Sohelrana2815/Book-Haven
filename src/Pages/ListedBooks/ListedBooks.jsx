import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localStorage";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBooksCard from "../ListedBooksCard/ListedBooksCard";

const ListedBooks = () => {
  const books = useLoaderData(); // Load all book data from the loader

  const [readBooks, setReadBooks] = useState([]); // State to store filtered read books
  const [wishlistBooks, setWishlistBooks] = useState([]); // State to store filtered wishlist books
  const [sortCriteria, setSortCriteria] = useState(""); // State to track selected sorting criteria

  useEffect(() => {
    const { readList, wishlist } = getStoredBooks(); // Retrieve stored book IDs from local storage

    if (books.length > 0) {
      // Check if books data is available

      // Filter read books based on stored IDs and sort them if a sort criteria is selected
      const filteredReadBooks = books.filter((book) =>
        readList.includes(book.id)
      );
      setReadBooks(sortBooks(filteredReadBooks, sortCriteria));

      // Filter wishlist books based on stored IDs and sort them if a sort criteria is selected
      const filteredWishlistBooks = books.filter((book) =>
        wishlist.includes(book.id)
      );
      setWishlistBooks(sortBooks(filteredWishlistBooks, sortCriteria));
    }
  }, [books, sortCriteria]); // Re-run this effect when books data or sort criteria changes

  // Function to sort books based on selected criteria
  const sortBooks = (booksArray, criteria) => {
    if (!criteria) return booksArray; // If no criteria selected, return the original order

    // Sort the books array in descending order based on the selected criteria
    return booksArray.sort((a, b) => {
      if (criteria === "rating") return b.rating - a.rating;
      if (criteria === "totalPages") return b.totalPages - a.totalPages;
      if (criteria === "yearOfPublishing")
        return b.yearOfPublishing - a.yearOfPublishing;
      return 0; // Default case: no sorting applied
    });
  };

  return (
    <>
      <div className="bg-gray-300 p-4 rounded-lg shadow-lg text-center mt-20">
        <h2 className="text-black font-semibold text-2xl font-worksans">
          Books
        </h2>
      </div>
      <div className="container mx-auto mt-8">
        {/* Dropdown to select sort criteria */}
        <div className="mb-4">
          <label htmlFor="sort" className="font-semibold mr-2">
            Sort by:
          </label>
          <select
            id="sort"
            className="p-2 border border-gray-300 rounded"
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)} // Update sort criteria state when selection changes
          >
            <option value="">Select</option>
            <option value="rating">Rating</option>
            <option value="totalPages">Number of Pages</option>
            <option value="yearOfPublishing">Published Year</option>
          </select>
        </div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            <div>
              {readBooks.length > 0 ? (
                // Display read books sorted by the selected criteria
                readBooks.map((book) => (
                  <ListedBooksCard key={book.id} book={book}></ListedBooksCard>
                ))
              ) : (
                <p>No books in the read list</p>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {wishlistBooks.length > 0 ? (
                // Display wishlist books sorted by the selected criteria
                wishlistBooks.map((book) => (
                  <ListedBooksCard key={book.id} book={book}></ListedBooksCard>
                ))
              ) : (
                <p>No books in the wishlist</p>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ListedBooks;
