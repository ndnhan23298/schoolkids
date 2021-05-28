import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FeeController } from "./fees.controller";
import { FeeService } from "./fees.service";
import { Fee } from "./models/fees.schema";

@Module({
    imports: [TypeOrmModule.forFeature([Fee])],
    providers: [FeeService],
    controllers: [FeeController],
    exports: [FeeService]
})

export class FeeModule { }