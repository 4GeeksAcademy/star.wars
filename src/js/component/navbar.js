// Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import defaultAvatar from "/workspaces/star.wars/src/img/StarWarsLogo.jpg";

const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/" className="navbar-brand ms-5">
                <img src={defaultAvatar} style={{ width: "100px", height: "80px" }} />
            </Link>
            <div className="dropdown me-5">
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="favoritesDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
                    {store.favorites.map((item) => (
                        <li key={item.uid}>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link className="dropdown-item" to={`/${item.type}/${item.uid}`}>
                                    {item.properties.name}
                                </Link>
                                <button className="btn btn-link" onClick={() => actions.removeFromFavorites(item)}>
                                    <i class='fas fa-trash-alt'></i>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
