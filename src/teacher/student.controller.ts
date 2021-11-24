import { Controller, Get, Param, Put } from '@nestjs/common';
import {
  FindStudentResponseDTO,
  StudentResponseDTO,
} from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';
import { TeacherService } from './teacher.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private studentService: StudentService) {}
  @Get()
  getStundts(@Param('teacherId') teacherId: string): FindStudentResponseDTO[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDTO {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
