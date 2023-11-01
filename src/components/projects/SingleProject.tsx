import { ProjectType } from "./projectArray";

type SingleProjectProps = {
  project: ProjectType;
};

const SingleProject = ({ project }: SingleProjectProps) => {
  return <section>{project.name}</section>;
};

export default SingleProject;
