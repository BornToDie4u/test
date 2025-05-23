import express from "express"
import {
    createStudentHandler,
    AttendanceHandler,
    StudProfileHandler,
    eligibilityHandler,
    UpdateStudProfile,
    DeleteProfHandler
} from "../controller/student"

const router = express.Router()

router.post("/create", createStudentHandler)
router.post("/MarkAttendance", AttendanceHandler)
router.post("/getStud", StudProfileHandler)
router.post("/eligible",eligibilityHandler )
router.post("/updateProf", UpdateStudProfile)
router.post("/delete", DeleteProfHandler)


export default router;
