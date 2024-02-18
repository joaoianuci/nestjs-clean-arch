export class CreateProjectDto {
  name: string;

  description: string;

  started_at: Date | null;

  forecasted_at: Date | null;

  fineshed_at: Date | null;
}
