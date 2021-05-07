import { Question } from '../questions/question';

export interface Quiz {
    id: String;
    title: String;
    description: String;
    questions: Array<Question>;
}