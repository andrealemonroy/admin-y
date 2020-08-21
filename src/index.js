import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import App from "./routes/App";

const initialState = {
  user: {},
  playing: {},
  mylist: [],
  trends: [
    {
      id: 2,
      slug: "tvshow-2",
      title: "In the Dark",
      type: "Scripted",
      language: "English",
      year: 2009,
      contentRating: "16+",
      duration: 164,
      cover: "http://dummyimage.com/800x600.png/99118E/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 13,
      slug: "tvshow-13",
      title: "NCIS: Los Angeles",
      type: "Drama",
      language: "English",
      year: 2010,
      contentRating: "16+",
      duration: 160,
      cover: "http://dummyimage.com/800x600.png/5472FF/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
