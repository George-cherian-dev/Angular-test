import { Comment } from '../shared/comments';

export class Dish{
    id:string;
    name:string;
    image:string;
    category:string;
    featured:boolean;
    label:string;
    price:string;
    description:string;
    comments:Comment [];
}
