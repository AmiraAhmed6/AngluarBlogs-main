import { Blog } from "./blog";

export class Comment {
    constructor(
        public _id:String,
        public img:String,
        public blog:Blog,
        public createdAt:Date
    ){

    }
}
