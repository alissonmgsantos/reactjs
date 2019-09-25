import React, { Component } from "react";
import { Link } from "react-router";
export default class Header extends Component {
  render() {
    return (
      <header className="header container">
        <h1 className="header-logo">InstaPhoto</h1>

        <form lpformnum="1" className="header-busca">
          <input
            type="text"
            name="search"
            placeholder="Pesquisa"
            className="header-busca-campo"
          />
          <input type="submit" value="Buscar" className="header-busca-submit" />
        </form>

        <nav>
          <ul className="header-nav">
            <li className="header-nav-item">
              <Link>
                ♡{/* <!--                 ♥--> */}
                {/* <!--Quem deu like nas minhas fotos?--> */}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
