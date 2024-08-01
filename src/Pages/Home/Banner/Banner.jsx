import { Link } from "react-router-dom";
import bannerImg from "../../../assets/book1.png";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg w-full lg:w-auto"
            alt="Book"
          />
          <div className="text-center lg:text-left lg:ml-8 mt-6 lg:mt-0 ">
            <h1 className="text-3xl lg:text-5xl font-bold font-playfair lg:w-3/4 leading-relaxed">
              Books to freshen up your
              <span className="text-blue-500 lg:ml-4">
                <Typewriter
                  options={{
                    strings: [
                      "bookshelf",
                      "mind",
                      "knowledge",
                      "imagination",
                      "perspective",
                      "creativity",
                      "inspiration",
                      "soul",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 75,
                    delay: 150, // Typing speed
                  }}
                />
              </span>
            </h1>
            <Link to="/listedBooks">
              <button className="btn bg-hexgreen-0 text-white mt-12">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
