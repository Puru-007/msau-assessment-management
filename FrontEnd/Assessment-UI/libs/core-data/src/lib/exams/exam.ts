import { Question } from '../questions/question';

export interface Exam {
    id: String;
    title: String;
    description: String;
    questions: Array<Question>;
}