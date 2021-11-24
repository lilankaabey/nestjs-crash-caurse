import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { FindTeacherResponseDTO } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private teacherService: TeacherService) {}
  @Get()
  getTeachers(): FindTeacherResponseDTO[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTecherById(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindTeacherResponseDTO {
    return this.teacherService.getTeacherById(teacherId);
  }
}
