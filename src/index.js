import React from "react";
import ReactDOM from "react-dom";

const Hi = ({ name }) => (
  <div>
    Hello <em>{name}!</em>
  </div>
);

const MediaCard = ({ title, body, imageUrl }) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <img src={imageUrl} alt="(Blank)" />
  </div>
);

function Gate({ isOpen }) {
  return <div>Gate status: {isOpen ? "open" : "closed"}</div>;
}

ReactDOM.render(
  <div>
    <Hi name="Dave" />
    <MediaCard title="Title" body="Body" imageUrl="#" />
    <Gate isOpen="" />
  </div>,
  document.querySelector("#root")
);
