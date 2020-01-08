import React from "react";
import moment from "moment";
import { ProjectInbound } from "../../store/objects/projectObjects";

interface Props {
  project: ProjectInbound;
}

const ProjectSummary: React.FunctionComponent<Props> = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">{moment(project.createdAt).calendar()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
