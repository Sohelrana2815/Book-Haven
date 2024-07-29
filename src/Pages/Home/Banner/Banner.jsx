const Banner = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col  lg:flex-row-reverse ">
          <img src="/src/assets/book1.png" className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold font-playfair lg:w-3/4 leading-relaxed">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn bg-hexgreen-0 text-white mt-12">
              View The List
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
