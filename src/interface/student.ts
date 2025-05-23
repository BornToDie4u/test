import {student} from "../types/student"

export interface StudentCredInterface {
    createcourse(studentInput : student):Promise<Boolean>;
    markAttendance(studentId : string ):Promise<Boolean>;
    getstudent(studentId : string):Promise<any>;
    verify(studentId : string):Promise<Boolean>;
    update(studentId : string , data : Partial<student>):Promise<student>;
    delete(studentId : string):Promise<Boolean>;
}