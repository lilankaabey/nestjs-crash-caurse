import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students } from 'src/db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  //Middleware always need to have use method: use()
  use(req: Request, res: Response, next: NextFunction) {
    console.log('This middleware is called');
    const studentId = req.params.studentId;
    const studentExists = students.some((student) => {
      return student.id === studentId;
    });

    if (!studentExists) {
      throw new HttpException('Student not found', 400);
    }

    next();
  }
}
