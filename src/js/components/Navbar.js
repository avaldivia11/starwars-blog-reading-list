import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const deleteItem = (i) => {
    console.log(i);
    let index = i;
    //agregar action para remover favorito en el arrelgo de store favoriteList
    actions.deleteFavorite(index);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg mb-5 navbar-dark bg-dark fw-bold fixed-top">
        <div className="container">
          <a className="navbar-brand ms-5" to="/" as={Link}>
            {" "}
            <Link className="text-decoration-none text-warning " to="/">
              Star Wars API
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item me-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  to="/people"
                  as={Link}
                >
                  <Link
                    className="text-decoration-none text-warning"
                    to="/people"
                  >
                    People{" "}
                  </Link>
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  to="/planets"
                  as={Link}
                >
                  <Link
                    className="text-decoration-none text-warning"
                    to="/planets"
                  >
                    Planets
                  </Link>
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link active "
                  aria-current="page"
                  to="/vehicles"
                  as={Link}
                >
                  <Link
                    className="text-decoration-none text-warning"
                    to="/vehicles"
                  >
                    Vehicles
                  </Link>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-danger"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  as={Link}
                >
                  <Link className="text-decoration-none text-danger ms-auto" to="">
                    Favorites <i className="bi bi-star-half"></i>
                  </Link>
                </a>
                <ul
                  className="dropdown-menu active"
                  aria-labelledby="navbarDropdown"
                >
                  {store.favorites.length > 0 ? (
                    store.favorites.map((item, i) => (
                      <li key={i} index={i}>
                        <p
                          className="dropdown-item d-flex justify-content-between"
                          href="#"
                        >
                          <p className="fw-bold p-0 m-0 b-0 text-dark">
                            {item}
                          </p>
                          <i
                            type="button"
                            className="bi bi-trash-fill text-danger"
                            onClick={() => deleteItem(i)}
                          ></i>
                        </p>
                      </li>
                    ))
                  ) : (
                    <li>
                      <p
                        className="dropdown-item d-flex justify-content-between"
                        href="#"
                      >
                        <p className="fw-bold p-0 m-0 b-0 text-warning">
                          Agregar favoritos{" "}
                          <i className="bi bi-arrow-down-circle-fill text-warning"></i>
                        </p>
                      </p>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
