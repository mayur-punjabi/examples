import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default () => {
  return (
    <>
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">About</Link>
        <br />
        <a href="/contact-us">
          <p>Contact us</p>
        </a>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
};

const About = () => <p>About</p>;

const ContactUs = () => <p>Contact Us</p>;

const Home = () => <p>Home</p>;
