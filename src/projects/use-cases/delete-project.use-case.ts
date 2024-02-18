import { Inject } from "@nestjs/common";
import { IProjectRepository } from "../project.repository";

export class DeleteProjectUseCase {
  constructor(
    @Inject("IProjectRepository")
    private readonly projectRepo: IProjectRepository,
  ) {}

  execute(id: string) {
    return this.projectRepo.delete(id);
  }
}
