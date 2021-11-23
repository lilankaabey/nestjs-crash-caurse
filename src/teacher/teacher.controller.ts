import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherResponseDTO } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherResponseDTO[] {
    return 'Get All Teachers';
  }

  @Get('/:teacherId')
  getTecherById(@Param('teacherId') teacherId: string): FindTeacherResponseDTO {
    return `Get Teacher With Id of ${teacherId}`;
  }
}
