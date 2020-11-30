export module SharedList{
    export const CategoryList = [
        {id : 1 , name : "Projects" , routerLink : "/projects" , imgSource : "assets/images/projectmanager.png"}
    ]
}

export class Category{
    id : number;
    name: string;
    routerLink : string;
    imgSource : string;
}