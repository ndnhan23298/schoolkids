import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { scopes } from "src/constants/scopes";
import { Scopes } from "src/middlewares/authz";
import { FeeService } from "./fees.service";
import { Fee } from "./models/fees.schema";

@Controller('fees')
export class FeeController {
    constructor(private feeService: FeeService) { }

    @Get(':id')
    async findOne(@Param() id) {
        return await this.feeService.findOne(id)
    }

    @Get('/student/:id')
    @UseGuards(new Scopes([[scopes.PER_READ_FEES]]))
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(new ValidationPipe())
    async findStudentFee(@Param() id) {
        return await this.feeService.findMany({
            query: {
                studentID: id
            }
        })
    }

    @Get('')
    @UseGuards(new Scopes([[scopes.TEACHER_READ_FEES]]))
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(new ValidationPipe())
    async findFeeMonth(@Query() query) {
        return await this.feeService.findMany({
            query,
        })
    }

    @Post('')
    async create(@Body() fee: Fee) {
        return await this.feeService.create(fee)
    }

    @Put(':id')
    async update(@Body() updateFee: Fee, @Param() id) {
        return await this.feeService.update(updateFee, id);
    }

    @Delete(':id')
    async delete(@Param() id) {
        return await this.feeService.delete(id);
    }
}