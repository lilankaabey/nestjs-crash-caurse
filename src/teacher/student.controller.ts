import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStundts() {
    return 'Get All Students That Belong To A Teacher';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'Get Student Teacher';
  }
}
