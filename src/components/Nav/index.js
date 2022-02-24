import React from "react";

function Nav(props) {
  const tabs = ["About", "Projects", "Contact", "Resume"];
  return (
    <header>
      <h2>
        <a
          style={{ textDecorationLine: "none" }}
          data-testid="link"
          href="https://eramos3.github.io/my-react-portfolio/"
        >
          <span role="img" aria-label="camera">
            {" "}
            ⚽️
          </span>{" "}
          Eder Francisco Ramos
        </a>
      </h2>
      <nav>
        <ul className="flex-row px-1">
          {tabs.map((tab) => (
            <li className="mx-1" key={tab}>
              <a
                href={"#" + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={props.currentPage === tab ? "navActive" : "nav-link"}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
