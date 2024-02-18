import { Inject } from "@nestjs/common";
import { IProjectRepository } from "../project.repository";

export class GetProjectUseCase {
  constructor(
    @Inject("IProjectRepository")
    private readonly projectRepo: IProjectRepository,
  ) {}

  async execute(id: string) {
    const project = await this.projectRepo.findById(id);
    return project;
  }
}
