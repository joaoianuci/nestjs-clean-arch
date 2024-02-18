import { Controller, Get, Post, Body, Param, Delete, Inject } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { CreateProjectUseCase } from "./use-cases/create-project.use-case";
import { ListProjectsUseCase } from "./use-cases/list-projects.use-case";
import { GetProjectUseCase } from "./use-cases/get-project.use-case";
import { DeleteProjectUseCase } from "./use-cases/delete-project.use-case";
import { StartProjectDto } from "./dto/start-project.dto";
import { StartProjectUseCase } from "./use-cases/start-project.use-case";
import { CancelProjectDto } from "./dto/cancel-project.dto";
import { CancelProjectUseCase } from "./use-cases/cancel-project.use-case";

@Controller("projects")
export class ProjectsController {
  @Inject(CreateProjectUseCase)
  private readonly createProjectUseCase: CreateProjectUseCase;
  @Inject(ListProjectsUseCase)
  private readonly listProjectsUseCase: ListProjectsUseCase;
  @Inject(GetProjectUseCase)
  private readonly getProjectUseCase: GetProjectUseCase;
  @Inject(DeleteProjectUseCase)
  private readonly deleteProjectUseCase: DeleteProjectUseCase;
  @Inject(StartProjectUseCase)
  private readonly startProjectUseCase: StartProjectUseCase;
  @Inject(CancelProjectUseCase)
  private readonly cancelProjectUseCase: CancelProjectUseCase;

  constructor() {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.createProjectUseCase.execute(createProjectDto);
  }

  @Get()
  findAll() {
    return this.listProjectsUseCase.execute();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.getProjectUseCase.execute(id);
  }

  @Post(":id/start")
  start(@Param("id") id: string, @Body() startProjectDto: StartProjectDto) {
    return this.startProjectUseCase.execute(id, startProjectDto);
  }

  @Post(":id/cancel")
  cancel(@Param("id") id: string, @Body() cancelProjectDto: CancelProjectDto) {
    return this.cancelProjectUseCase.execute(id, cancelProjectDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.deleteProjectUseCase.execute(id);
  }
}
