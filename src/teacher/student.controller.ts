import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentResponseDTO, StudentResponseDTO } from 'src/student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStundts(@Param('teacherId') teacherId: string): FindStudentResponseDTO[] {
    return `Get All Students That Belong To The Teacher With An Id of ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDTO {
    return `Update Student With Id of ${studentId} To Teacher With Id of ${teacherId}`;
  }
}
