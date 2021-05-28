import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { StudentHealth } from "./models/student_health.schema";
import { StudentHealthService } from "./student_health.service";

@Controller('health')
export class StudentHealthController {
    constructor(private studentHealthService: StudentHealthService) { }

    @Get('')
    async findAll() {
        return await this.studentHealthService.findAll()
    }

    @Get(':id')
    async findOne(@Param() id) {
        return await this.studentHealthService.findOne(id)
    }

    @Put(':id')
    async update(@Body() studentHealth: StudentHealth, @Param() id) {
        return await this.studentHealthService.update(studentHealth, id)
    }

    @Post('')
    async create(@Body() studentHealth: StudentHealth) {
        return await this.studentHealthService.create(studentHealth)
    }

    @Delete(':id')
    async delete(@Param() id) {
        return await this.studentHealthService.delete(id)
    }
}