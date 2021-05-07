import { User } from '../user/user';

export interface Project {
    id: string;
    title: string;
    description: string;
    user: User;
}
