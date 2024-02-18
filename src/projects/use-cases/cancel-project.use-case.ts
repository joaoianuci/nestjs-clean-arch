import { CancelProjectDto } from "../dto/cancel-project.dto";
import { IProjectRepository } from "../project.repository";
import { Inject } from "@nestjs/common";

export class CancelProjectUseCase {
  constructor(
    @Inject("IProjectRepository")
    private readonly projectRepo: IProjectRepository,
  ) {}

  async execute(id: string, input: CancelProjectDto) {
    const project = await this.projectRepo.findById(id);

    project.cancel(input.cancelled_at);
    await this.projectRepo.update(project);
    return project;
  }
}
