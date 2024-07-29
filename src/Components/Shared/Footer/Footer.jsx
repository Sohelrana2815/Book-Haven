const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside className="container mx-auto lg:max-w-screen-3xl px-4 sm:px-6 lg:px-8">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by SOHEL
            Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
