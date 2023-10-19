import { user } from "user";
export class book{
    constructor(
        public id1:number,
        public title:string,
        public author:string,
        public borrowedBy:user,
    ){}

}