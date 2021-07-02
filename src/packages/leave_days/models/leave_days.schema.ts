import { Class } from "src/packages/classes/models/classes.schema";
import { Student } from "src/packages/students/models/students.schema";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LeaveDay {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    firstDay: string;

    @Column()
    lastDay: string;

    @Column()
    content: string;

    @Column()
    daysOff: number;

    @ManyToOne(() => Student, student => student.id, { onDelete: 'NO ACTION' })
    @JoinColumn({ name: 'studentID' })
    @Column({ type: 'varchar' })
    studentID: string

    @ManyToOne(() => Class, classs => classs.id, { onDelete: 'NO ACTION' })
    @JoinColumn({ name: 'classID' })
    @Column({ type: 'varchar', nullable: true })
    classID: string
}