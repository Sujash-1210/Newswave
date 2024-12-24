import React from "react";

const Navbar2 = ({ setCategory }) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <img
          src="./logo.jpg"
          style={{ height: "50px", width: "120px", marginRight: "50px" }}
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <div class="nav-link" onClick={() => setCategory("general")}>
              Home
            </div>
            <div class="nav-link" onClick={() => setCategory("technology")}>
              Technology
            </div>
            <div class="nav-link" onClick={() => setCategory("business")}>
              Business
            </div>
            <div class="nav-link" onClick={() => setCategory("health")}>
              Health
            </div>
            <div class="nav-link" onClick={() => setCategory("science")}>
              Science
            </div>
            <div class="nav-link" onClick={() => setCategory("entertainment")}>
              Entertainment
            </div>
            <div class="nav-link" onClick={() => setCategory("sports")}>
              Sports
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
