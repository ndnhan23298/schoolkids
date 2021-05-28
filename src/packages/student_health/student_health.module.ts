import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentController } from "../students/students.controller";
import { StudentHealth } from "./models/student_health.schema";
import { StudentHealthService } from "./student_health.service";

@Module({
    imports: [TypeOrmModule.forFeature([StudentHealth])],
    providers: [StudentHealthService],
    controllers: [StudentController]
})

export class StudentHealthModule { }