import express from "express"
import {
    createStudentHandler,
    AttendanceHandler,
    StudProfileHandler,
    eligibilityHandler,
    UpdateStudProfile,
    DeleteProfHandler
} from "../controller/student"
import { Prevent_Proxy } from "../../middlewares/check_Attendance"

const router = express.Router()

router.post("/create", createStudentHandler)
router.post("/MarkAttendance",Prevent_Proxy, AttendanceHandler)
router.post("/getStud", StudProfileHandler)
router.post("/eligible",eligibilityHandler )
router.post("/updateProf", UpdateStudProfile)
router.post("/delete", DeleteProfHandler)


export default router;
