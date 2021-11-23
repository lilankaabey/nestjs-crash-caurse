import { Controller, Get, Param } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'Get All Teachers';
  }

  @Get('/:teacherId')
  getTecherById(@Param('teacherId') teacherId: string) {
    return `Get Teacher With Id of ${teacherId}`;
  }
}
