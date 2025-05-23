import {StudentCredInterface} from "../interface/student"
import {student} from "../types/student"


export class StudentAttendService {
    private _repository : StudentCredInterface;

    constructor(repository : StudentCredInterface){
         this._repository = repository;
    }


    async createStudent(studentInput : student) {
        
        const answer = await this._repository.createcourse(studentInput);
         if (!answer) {
            throw new Error("error in creating ")
        }
        return answer;


    }

    async Attendance(studentId: string) {

        const answer = await this._repository.markAttendance(studentId);
         if (!answer) {
            throw new Error("error in marking attendance")
        }
        return answer;
        
    }

    async getStud(studentId: string){
        const resStud = await this._repository.getstudent(studentId);
        console.log(resStud)
        if (!resStud) {
            throw new Error("error in getting stud")
        }
        return resStud;

    }

    async eligibleFirExam(studentId: string){
         const answer = await this._repository.verify(studentId);
         
        return answer;
    }

    async updateStudData(studentId: string , data: Partial<student>){

        const update = await this._repository.update(studentId,data);
        if (!update) {
            throw new Error("unable to fetch data");
    
        }
        return update
    }


    async deleteStud(studentId: string){
        const answer = await this._repository.delete(studentId);
         if (!answer) {
            throw new Error("error in calc eligibility")
        }
        return answer   ;
    }

}