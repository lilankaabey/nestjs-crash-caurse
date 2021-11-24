import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { v4 as uuid } from 'uuid'; //npm i uuid >>> use this special hash function to create uid
import {
  CreateStudentDTO,
  FindStudentResponseDTO,
  StudentResponseDTO,
  UpdateStudentDTO,
} from './dto/student.dto';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): FindStudentResponseDTO[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDTO {
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }

  createStudent(payload: CreateStudentDTO): StudentResponseDTO {
    const newStudent = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  udateStudent(payload: UpdateStudentDTO, studentId: string) {
    let updateStudent: StudentResponseDTO;

    const updateStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updateStudent = {
          id: studentId,
          ...payload,
        };
        return updateStudent;
      } else return student;
    });

    this.students = [...updateStudentList];

    return updateStudent;
  }

  getStudentsByTeacherId(teacherId: string): FindStudentResponseDTO[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponseDTO {
    let updateStudent: StudentResponseDTO;

    const updateStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updateStudent = {
          ...student,
          teacher: teacherId,
        };
        return updateStudent;
      } else return student;
    });

    this.students = [...updateStudentList];

    return updateStudent;
  }
}
