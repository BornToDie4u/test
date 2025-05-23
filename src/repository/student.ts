import {student} from "../types/student";
import {StudentCredInterface} from "../interface/student"
import {PrismaClient} from "../generated/prisma/client"

const prisma = new PrismaClient();

export class SchoolCredRepos implements StudentCredInterface{

    private _prisma : PrismaClient;
        constructor(){
            this._prisma = prisma;
        }


    async createcourse(studentInput: student): Promise<Boolean> {

        try {
            const initPresentDays = 0;
            const response = await this._prisma.student.create({
            data : {
                studentID : studentInput.studentID as string,
                name : studentInput.name as string,
                course : studentInput.course as string,
                Duration : studentInput.Duration as number,
                presentDays : initPresentDays as number
            }
            });
            if (!response) {
                throw new Error("error in creating the student course")
            }
            return true ;  
        } 
        catch (error) {
            console.log(`error occured in handling createcourse repos`);
            console.log(error);
            return false;
        }

    }


    async markAttendance(studentId: string): Promise<Boolean> {
        try {

            const studentData = await this._prisma.student.update({
                where : {id : studentId},
                data :{
                    presentDays : {
                        increment : 1, //took help
                    },
                },
            });

            if (!studentData) {
                throw new Error(
                    "no student found with given student Id"
                )
            }

            return true;    
            
        } catch (error) {
            console.log(`error occured in handling markAttendance repos`);
            console.log(error);
            return false;
        }
        
    }
    async getstudent(studentId: string): Promise<any> {

        try {
            console.log(studentId)
            const student = await this._prisma.student.findUnique({
                where : {id : studentId}
            })
            

            if (!student) {
                throw new Error("No student found with the given studentID")
            };

            return student;
            
        } catch (error) {
            console.log(`error occured in handling getstudent repos`);
            console.log(error);
            throw error
        }
        
    }
    async verify(studentId: string): Promise<Boolean> {
        try {
            console.log(studentId)

            const student = await this._prisma.student.findUnique({
                where : {id : studentId}
            })
            console.log(student);
            console.log("hi");

             if (!student) {
                throw new Error("No student found with the given studentID")
            };

            const presentDays = student.presentDays;
            const Duration = student.Duration;

            const persentage = presentDays/Duration

            if (persentage>0.75) {
                return true;
            }
            else return false;

        } catch (error) {
            console.log(`error occured in handling verify repos`);
            console.log(error);
            throw error;
        }
    }
    async update(studentId: string, data: Partial<student>): Promise<student> {  //took help Partial
         try {
            const student = await this._prisma.student.findUnique({
                where : {id : studentId}
            })

             if (!student) {
                throw new Error("No student found with the given studentID")
            };

            const updateStudent  = await this._prisma.student.update({
                where : {id : studentId},
                data,
            })

            return updateStudent;   

           

        } catch (error) {
            console.log(`error occured in handling update repos`);
            console.log(error);
            throw error;
        }

    }
    async delete(studentId: string): Promise<Boolean> {
         try {
            const student = await this._prisma.student.findUnique({
                where : {id : studentId}
            })

             if (!student) {
                throw new Error("No student found with the given studentID")
            };

            const ans = await this._prisma.student.delete({
                where:{
                    id : studentId
                }
            })
            return true;
            
        } catch (error) {
            console.log(`error occured in handling delete repos`);
            console.log(error);
            throw error;
        }

    }
    
}