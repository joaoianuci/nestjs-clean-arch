import { Module } from "@nestjs/common";
import { ProjectsController } from "./projects.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Project } from "./entities/project.entity";
import { projectUseCases } from "./use-cases";
import { ProjectTypeORMRepository } from "./project.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [
    ...projectUseCases,
    ProjectTypeORMRepository,
    {
      provide: "IProjectRepository",
      useExisting: ProjectTypeORMRepository,
    },
  ],
})
export class ProjectsModule {}
