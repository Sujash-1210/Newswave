import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <p className="mb-0">
          <a href="/privacy-policy" className="text-light">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms-of-service" className="text-light mx-2">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
