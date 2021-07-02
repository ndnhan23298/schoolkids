import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { LeaveDay } from "./models/leave_days.schema";

@Injectable()
export class LeaveDayService {
    constructor(
        @InjectRepository(LeaveDay)
        private leavedayRepos: Repository<LeaveDay>
    ) { }

    async findMany({
        query
    }): Promise<LeaveDay[]> {
        return await this.leavedayRepos.find({
            where: query,
            relations: ['studentID']
        });
    }

    async findOne(id): Promise<LeaveDay> {
        return await this.leavedayRepos.findOne(id);
    }

    async create(leaveDay: LeaveDay): Promise<LeaveDay> {
        return await this.leavedayRepos.save(leaveDay);
    }

    async update(updateData: LeaveDay, id): Promise<LeaveDay> {
        try {
            const leaveDay = await this.leavedayRepos.findOne(id)
            if (!leaveDay) {
                throw new NotFoundException('NoticeNotFound')
            }
            const updateParticipant = await this.leavedayRepos.save({
                ...leaveDay,
                ...updateData
            })
            return updateParticipant
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async delete(id): Promise<DeleteResult> {
        try {
            const leaveDay = await this.leavedayRepos.findOne(id)
            if (!leaveDay) {
                throw new NotFoundException('NoticeNotFound')
            }
            return await this.leavedayRepos.delete(id)

        } catch (error) {
            return Promise.reject(error)
        }
    }
}