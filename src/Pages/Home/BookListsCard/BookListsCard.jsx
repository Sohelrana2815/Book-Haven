import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const BookListsCard = ({ book }) => {
  const { image, bookName, author, category, rating, tags, id } = book;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        className="card bg-base-100 w-full lg:w-96 shadow-xl"
        data-aos="fade-up"
      >
        <Link to={`/book/${id}`}>
          <figure>
            <img src={image} alt={bookName} className="w-24 sm:w-36 lg:w-40" />
          </figure>
          <div className="card-body">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span className="text-green-400 rounded-full" key={index}>
                  # {tag}
                </span>
              ))}
            </div>
            <h2 className="card-title text-base sm:text-lg lg:text-xl">
              {bookName}
            </h2>
            <p className="text-sm sm:text-base">By : {author}</p>
            <div className="divider"></div>
            <div className="flex justify-between">
              <p className="text-sm sm:text-base">{category}</p>
              <p className="flex items-center gap-2 text-sm sm:text-base">
                {rating} <FaStar />
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
BookListsCard.propTypes = {
  book: PropTypes.object.isRequired,
};
export default BookListsCard;
