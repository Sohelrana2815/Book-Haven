import PropTypes from "prop-types";
import { FaBookOpen, FaLocationDot, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ListedBooksCard = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    totalPages,
    rating,
    category,
    publisher,
    yearOfPublishing,
    id,
  } = book;
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="container mt-8 border-2 rounded-xl p-6 flex flex-col lg:flex-row lg:space-x-10 space-y-6 lg:space-y-0"
      >
        <div className="p-4">
          <img
            src={image}
            className="shadow-2xl rounded-xl p-4 lg:w-52 bg-gray-50 w-full"
            alt={bookName}
          />
        </div>
        <div className="p-4 flex-1">
          <h2 className="text-2xl font-bold font-playfair">{bookName}</h2>
          <p className="mt-4">By : {author}</p>
          {/* tags and publish year */}
          <div className="flex flex-wrap items-center space-x-4 p-4">
            <span className="font-bold">Tags</span>
            {tags.map((tag, index) => (
              <small
                key={index}
                className="border rounded-full p-2 bg-base-200 text-green-400"
              >
                # {tag}
              </small>
            ))}
            <span className="flex items-center mt-4 lg:mt-0">
              <FaLocationDot className="mr-2" /> Year of Publishing :{" "}
              {yearOfPublishing}
            </span>
          </div>
          <p className="flex  items-center gap-2">
            <FaUser /> Publisher : {publisher}
            <FaBookOpen /> Page {totalPages}
          </p>
          <div className="border-b mt-6 p-2"></div>
          <div className="flex space-y-3 lg:space-y-0 flex-col lg:flex-row items-center space-x-0 lg:space-x-6 mt-6 p-4">
            <p>Category : {category}</p>
            <p>Rating : {rating}</p>
            <Link to={`/book/${id}`}>
              <button className="btn btn-success btn-sm">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

ListedBooksCard.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    bookName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalPages: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    yearOfPublishing: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ListedBooksCard;
