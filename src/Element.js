import React from "react";

const Element = (props) => {
  return (
    <div className="project-card" key={props.Key}>
      <div className="card-image">
        <img src={props.PictureUrl} alt="project" />
      </div>
      <div className="card-body">
        <div className="body-title">{props.Title}</div>
        <div className="body-content">
          <p>{props.Description}</p>
        </div>
        <div className="body-links">
          <a
            href={props.Live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="links-button">Live Preview</div>
          </a>
          <a
            href={props.Code}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="links-button">Code</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Element;
