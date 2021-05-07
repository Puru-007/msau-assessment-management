import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private httpClient: HttpClient) { }

  all(): Observable<Question[]> {
    return this.httpClient.get<Question[]>("/api/questions");
  }

  create(question: Question){
    return this.httpClient.post("/api/question", question);
  }  
}
