import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const BookListsCard = ({ book }) => {
  const { image, bookName, author, category, rating, tags } = book;
  return (
    <>
      <div className="card bg-base-100 lg:w-96 shadow-xl">
        <Link>
          <figure>
            <img src={image} alt={bookName} className="lg:w-40 w-36 " />
          </figure>
          <div className="card-body">
            <div className="flex  gap-2">
              {tags.map((tag, index) => (
                <span className="text-green-400 rounded-full" key={index}>
                  # {tag}
                </span>
              ))}
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p>By : {author}</p>
            <div className="divider"></div>
            <div className="flex justify-between">
              <p>{category}</p>
              <p className="flex items-center gap-2">
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
