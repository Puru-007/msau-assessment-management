import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizesService {

  constructor(private httpClient: HttpClient) { }

  all(): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>("/api/quizes");
  }

  create(quiz: Quiz) {
    return this.httpClient.post("/api/quiz", quiz);
  }
}
