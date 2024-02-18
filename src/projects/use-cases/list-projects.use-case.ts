import { Inject } from "@nestjs/common";
import { IProjectRepository } from "../project.repository";

export class ListProjectsUseCase {
  constructor(
    @Inject("IProjectRepository")
    private readonly projectRepo: IProjectRepository,
  ) {}
  execute() {
    return this.projectRepo.findAll();
  }
}
