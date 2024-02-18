import { randomUUID } from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";

export enum ProjectStatus {
  PENDING = "pending",
  ACTIVE = "active",
  CANCELLED = "cancelled",
  COMPLETED = "completed",
}

@Entity()
export class Project {
  @PrimaryColumn("uuid")
  id: string; // UUID

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true, type: "datetime" })
  started_at: Date | null;

  @Column({ nullable: true, type: "datetime" })
  cancelled_at: Date | null;

  @Column({ nullable: true, type: "datetime" })
  forecasted_at: Date | null;

  @Column({ nullable: true, type: "datetime" })
  finished_at: Date | null;

  @Column({
    type: "simple-enum",
  })
  status: ProjectStatus = ProjectStatus.PENDING;

  constructor(
    props: { name: string; description: string; started_at?: Date | null; cancelled_at?: Date | null; forecasted_at?: Date | null; finished_at?: Date | null },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? randomUUID();

    if (props?.started_at) {
      this.start(props.started_at);
    }

    if (props?.cancelled_at) {
      this.cancel(props.cancelled_at);
    }
  }

  start(started_at: Date) {
    if (this.status === ProjectStatus.ACTIVE) {
      throw new Error("Cannot start an active project");
    }

    if (this.status === ProjectStatus.COMPLETED) {
      throw new Error("Cannot start a completed project");
    }

    if (this.status === ProjectStatus.CANCELLED) {
      throw new Error("Cannot start a cancelled project");
    }

    this.started_at = started_at;
    this.status = ProjectStatus.ACTIVE;
  }

  cancel(cancelled_at: Date) {
    if (this.status === ProjectStatus.CANCELLED) {
      throw new Error("Cannot cancel a cancelled project");
    }

    if (this.status === ProjectStatus.COMPLETED) {
      throw new Error("Cannot cancel a completed project");
    }

    if (cancelled_at < this.started_at) {
      throw new Error("Cannot cancel a project that has already started");
    }

    this.cancelled_at = cancelled_at;
    this.status = ProjectStatus.CANCELLED;
  }
}
