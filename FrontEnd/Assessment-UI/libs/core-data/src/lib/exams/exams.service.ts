import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result';
import { Quiz } from '../quizes/quiz';
import { Exam } from './exam';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private httpClient: HttpClient) { }

  getAllExams(): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(`/api/exams`);
  }

  getExam(quizId): Observable<Exam> {
    return this.httpClient.get<Exam>(`/api/exam/${quizId}`);
  }

  evalExam(quizId, exam): Observable<Result> {
    return this.httpClient.post<Result>(`/api/exam/${quizId}`, exam);
  }

  getResult(quizId): Observable<Result> {
    return this.httpClient.get<Result>(`/api/exam/result/${quizId}`);
  }

  getPercentile(quizId): Observable<Number> {
    return this.httpClient.get<Number>(`/api/exam/percentile/${quizId}`);
  }

}
