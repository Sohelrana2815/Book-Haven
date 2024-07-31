const getStoredBooks = () => {
  const storedReadBooks = localStorage.getItem("readBooks");
  const storedWishlistBooks = localStorage.getItem("wishlistBooks");

  return {
    readList: storedReadBooks ? JSON.parse(storedReadBooks) : [],
    wishlist: storedWishlistBooks ? JSON.parse(storedWishlistBooks) : [],
  };
};

const saveToReadList = (id) => {
  const { readList } = getStoredBooks();
  const isAlreadyInReadList = readList.includes(id);
  if (!isAlreadyInReadList) {
    readList.push(id);
    localStorage.setItem("readBooks", JSON.stringify(readList));
  }
};

const saveToWishList = (id) => {
  const { wishlist } = getStoredBooks();
  const isAlreadyInWishlist = wishlist.includes(id);
  if (!isAlreadyInWishlist) {
    wishlist.push(id);
  }
};

export { getStoredBooks, saveToReadList, saveToWishList };
