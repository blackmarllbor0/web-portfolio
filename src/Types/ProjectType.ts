export interface ProjectType {
  id: number;
  projectDescription: string;
  projectLink: string;
  projectName: string;
  projectTechnologies: string[];
  projectType: "front" | "back";
  projectResultLink?: string;
}
