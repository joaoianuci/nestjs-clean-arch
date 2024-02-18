import { CancelProjectUseCase } from "./cancel-project.use-case";
import { CreateProjectUseCase } from "./create-project.use-case";
import { DeleteProjectUseCase } from "./delete-project.use-case";
import { GetProjectUseCase } from "./get-project.use-case";
import { ListProjectsUseCase } from "./list-projects.use-case";
import { StartProjectUseCase } from "./start-project.use-case";

export const projectUseCases = [CreateProjectUseCase, ListProjectsUseCase, GetProjectUseCase, DeleteProjectUseCase, CancelProjectUseCase, StartProjectUseCase];
