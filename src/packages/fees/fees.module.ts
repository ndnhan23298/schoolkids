import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClassModule } from "../classes/classes.module";
import { StudentModule } from "../students/students.module";
import { FeeController } from "./fees.controller";
import { FeeService } from "./fees.service";
import { Fee } from "./models/fees.schema";

@Module({
    imports: [
        ClassModule,
        StudentModule,
        TypeOrmModule.forFeature([Fee]),
    ],
    providers: [FeeService],
    controllers: [FeeController],
    exports: [FeeService]
})

export class FeeModule { }