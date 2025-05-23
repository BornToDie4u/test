import {StudentAttendService} from "../../services/student"
import {SchoolCredRepos} from "../../repository/student"
import {Request,Response, NextFunction } from "express";


const studentService = new StudentAttendService(new SchoolCredRepos());


export const createStudentHandler = async(
    req : Request,
    res : Response,
    next : NextFunction
)=>{

    try {
        const Student = req.body 
        console.log (Student);

        if (!Student) {
            throw new Error ("enter the required input")
        }

        const answer = await studentService.createStudent(Student);  

        if (answer) {
            
            res.status(200).json({mssg : "student created"})
        }

        else throw new Error("student not created")
    } catch (error) {
        return console.log(error)
    }
}


export const AttendanceHandler = async(
    req : Request,
    res : Response,
    next : NextFunction
)=>{
    try {
        console.log("hi")
        const {studentId} = req.body
        if (!studentId) {
            throw new Error ("enter the correct id")
        }

        const answer = await studentService.Attendance(studentId);

        if (answer) {
            
            res.status(200).json({mssg : "Attendance "})
        }

        else throw new Error("Attendance not updated")

        
    } catch (error) {
        return console.log(error)
    }
}


export const StudProfileHandler = async(
    req : Request,
    res : Response,
    next : NextFunction
)=>{
    try {
        const {studentId} = req.body;
        if (!studentId) {
            throw new Error ("enter the correct id")
        }
        console.log("hi")
        const StudDetails = await studentService.getStud(studentId);

        if (StudDetails) {
            res.status(200).json({studDetails : StudDetails})
        }
        
    } catch (error) {
        return console.log(error)
    }
}


export const eligibilityHandler = async(
    req : Request,
    res : Response,
    next : NextFunction
)=>{
    try {
        const {studentId} = req.body;
        if (!studentId) {
            throw new Error ("enter the correct id")
        }

        const isEligible = await studentService.eligibleFirExam(studentId);
                console.log(isEligible)
        if (isEligible) {
            res.status(200).json({result : "student is eligible for exams"})
        }
        else  res.status(500).json({result : "student is not eligible for exams"})
    } catch (error) {
        return console.log(error)
    }
}

export const UpdateStudProfile = async(
    req : Request,
    res : Response,
    next : NextFunction
)=>{
    try {
        const {studentId , data} = req.body;
        if (!studentId) {
            throw new Error ("enter the correct id")
        }

        if (!data) {
            throw new Error ("enter the correct data format")
        }


        const updatedProfile = await studentService.updateStudData(studentId , data);

        if (updatedProfile) {
             res.status(200).json({updatedProf : updatedProfile});
        }

        else  res.status(500).json({err : "Profile not updated"})

    } catch (error) {
        return console.log(error)
    }
}


export const DeleteProfHandler = async(
    req : Request,
    res : Response,
    next : NextFunction
)=>{
    try {
        const {studentId} = req.body;
        if (!studentId) {
            throw new Error ("enter the correct id")
        }
        const ans = await studentService.deleteStud(studentId);
        
        if (ans) {
             res.status(200).json({mssg : "this Student corse ended"})
        }
        else  res.status(500).json({mssg : "request not satisfies somwthing went wrong"});


    } catch (error) {
        return console.log(error)
    }
}

