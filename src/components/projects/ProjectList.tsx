import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import { ProjectObjects } from "../../store/project";

interface Props {
  projects: ProjectObjects.ProjectInbound[];
}

const ProjectList: React.FunctionComponent<Props> = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
