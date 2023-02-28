// export class Task{
//     id!:number;
//     date!:Date;
//     message!:string;
// }


export class Task {
    constructor(
      public id:number=0,
      public date:Date=new Date(),
      public message:string=''
    ) {}
  }

