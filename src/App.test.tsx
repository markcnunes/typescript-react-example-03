import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Store } from "./Store";
import { act } from "react-dom/test-utils";

const state = {
  episodes: [
    {
      airdate: "2013-12-02",
      airstamp: "2013-12-03T03:30:00+00:00",
      airtime: "22:30",
      id: 14308,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/15/37912.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/15/37912.jpg",
      },
      name: "Pilot",
      number: 1,
      runtime: 30,
      season: 1,
      summary:
        "<p>Rick takes Morty to another dimension to get some seeds for him but Morty's parents are considering to put Rick in a retirement home for keeping Morty away from school to help him in his lab.</p>",
      type: "regular",
      url: "http://www.tvmaze.com/episodes/14308/rick-and-morty-1x01-pilot",
    },
  ],
  favourites: [
    {
      airdate: "2013-12-02",
      airstamp: "2013-12-03T03:30:00+00:00",
      airtime: "22:30",
      id: 14308,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/15/37912.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/15/37912.jpg",
      },
      name: "Pilot",
      number: 1,
      runtime: 30,
      season: 1,
      summary:
        "<p>Rick takes Morty to another dimension to get some seeds for him but Morty's parents are considering to put Rick in a retirement home for keeping Morty away from school to help him in his lab.</p>",
      type: "regular",
      url: "http://www.tvmaze.com/episodes/14308/rick-and-morty-1x01-pilot",
    },
  ],
};

let container: any;

describe("App", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      ReactDOM.render(
        <Store.Provider value={{ state }}>
          <App />
        </Store.Provider>,
        container
      );
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test("renders h1", () => {
    expect(container.querySelector("h1").textContent).toBe("Rick and Morty");
  });

  test("renders paragraph", () => {
    expect(container.querySelector("p").textContent).toBe(
      "Pick your favourite episode!!!"
    );
  });

  test("renders home a tag", () => {
    expect(container.querySelector("a").textContent).toBe("Home");
  });

  test("renders fav a tag", () => {
    expect(container.querySelectorAll("a")[1].textContent).toContain(
      "Favourite(s)"
    );
  });
});
