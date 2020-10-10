import React from "react";
import { Link } from "@reach/router";
import { Store, useAppContext } from "./Store";

export default function App(props: any): JSX.Element {
  const { state } = useAppContext();

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!!!</p>
        </div>

        <div>
          <Link to="/">Home</Link>
          <Link to="/favs"> Favourite(s){state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
