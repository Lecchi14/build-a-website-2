import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1> TODO </h1>
      </div>
      <nav>
        <a href="/?city=Tokyo"> Tokyo </a>
        <a href="/?city=New%20York%20City"> New York City </a>
        <a href="/?city=Texas"> Texas </a>
        <a href="/?city=Shibuya"> Shibuya </a>
      </nav>
    </header>
  );
}

export default Header;
