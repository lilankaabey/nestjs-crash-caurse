import { Injectable } from '@nestjs/common';
import { FindStudentResponseDTO, StudentResponseDTO } from 'src/student/dto/student.dto';
import { teachers } from '../db';
import { FindTeacherResponseDTO } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;
  getTeachers(): FindTeacherResponseDTO[] {
    return this.teachers;
  }

  getTeacherById(teacherId: string): FindTeacherResponseDTO {
    return this.teachers.find((teacher) => {
      return teacher.id === teacherId;
    });
  }
}
