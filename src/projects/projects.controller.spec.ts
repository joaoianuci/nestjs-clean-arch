import { Test, TestingModule } from "@nestjs/testing";
import { ProjectsController } from "./projects.controller";
import { projectUseCases } from "./use-cases";
import { ProjectTypeORMRepository } from "./project.repository";

describe("ProjectsController", () => {
  let controller: ProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [...projectUseCases, ProjectTypeORMRepository, { provide: "IProjectRepository", useExisting: ProjectTypeORMRepository }],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
