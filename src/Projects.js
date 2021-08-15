import React, { Component } from "react";
import projects from "./projects.json";
import Element from "./Element.js";

class Projects extends Component {
  state = {
    projects: projects
  };

  actorsSet = () => {
    const newProjects = this.state.projects;
    this.setState({
      projects: newProjects
    });
  };

  randomActor = () => {
    const newActor = projects[Math.floor(Math.random() * projects.length)];
    const newContacts = this.state.contacts;

    newContacts.push(newActor);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <>
        <div className="break-line">
          <div className="hl"></div>
        </div>
        <h2>Projects</h2>
        <div className="content-project">
          {this.state.projects.map((project) => (
            <Element
              key={project.Key}
              PictureUrl={project.PictureUrl}
              Title={project.Title}
              Description={project.Description}
              Live={project.Live}
              Code={project.Code}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Projects;
