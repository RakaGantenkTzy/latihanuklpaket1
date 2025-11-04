let { userList, attendanceList } = require("../database")

function getAllAttendance(request, response) {
    return response.json({
        status: "success",
        message: "Attendances have been loaded",
        data: attendanceList,
    })
}

function getAttendances(request, response) {
    let userID = Number(request.params.id)
    let attendances = []

    attendanceList.forEach(a => {
        if (a.user_id === userID) {
            attendances.push(a)
        }
    })

    return response.json({
        status: "success",
        message: "Attendances have been loaded",
        data: attendances
    })
}

function addAttendance(request, response) {
    let newData = {
        attendance_id: attendanceList.length + 1,
        user_id: Number(request.body.user_id),
        date: new Date(request.body.date),
        time: request.body.time,
        status: request.body.status
    }

    if (newData) {
        attendanceList.push(newData)
    }

    return response.json({
        status: "success",
        message: "attendance have been added",
        data: newData
    })
}

function getSummary(request, response) {
    let userID = Number(request.params.id)

    let filteredData = []
    attendanceList.forEach(a => {
        if (a.user_id === userID) {
            filteredData.push(a)
        }
    })

    let monthAvailable = []
    filteredData.forEach(f => {
        if (!(monthAvailable.includes((f.date).getMonth()))) {
            monthAvailable.push((f.date).getMonth())
        }
    })

    let summary = []
    monthAvailable.forEach(m => {
        let attendanceSummary = {
            hadir: 0,
            izin: 0,
            sakit: 0,
            alpa: 0
        }

        filteredData.forEach(f => {
            if((f.date).getMonth() == m) {
                attendanceSummary[f.status]++
            }
        })

        summary.push({
            month: m + 1,
            attendance_summary: attendanceSummary
        })
    })

    return response.json({
        status: "success",
        message: "Summary has been generated",
        data: {
            user_id: userID,
            summary: summary
        }
    })
}

function getAnalysis(request, response) {
    let filter = {
        start_date: new Date(request.body.start_date),
        end_date: new Date(request.body.end_date),
        group_by: request.body.group_by
    }

    let filteredData = []
    userList.forEach(u => {
        attendanceList.forEach(a => {
            if (u.id === a.user_id && (u.role).includes(filter.group_by)) {
                if (a.date >= filter.start_date && a.date <= filter.end_date) {
                    filteredData.push(a)
                }
            }
        })
    })

    let userIDs = []
    filteredData.forEach(a => {
        if (!(userIDs.includes(a.user_id))) {
            userIDs.push(a.user_id)
        }
    })

    let attendanceCount = {
        hadir: 0,
        izin: 0,
        sakit: 0,
        alpa: 0
    }
    filteredData.forEach(f => {
        attendanceCount[f.status]++
    })

    let totalAttendance = filteredData.length
    let attendanceRate = {
        hadir_percentage: `${Math.round(attendanceCount.hadir / totalAttendance * 100)} Percent`,
        izin_percentage: `${Math.round(attendanceCount.izin / totalAttendance * 100)} Percent`,
        sakit_percentage: `${Math.round(attendanceCount.sakit / totalAttendance * 100)} Percent`,
        alpa_percentage: `${Math.round(attendanceCount.alpa / totalAttendance * 100)} Percent`
    }

    let groupedAnalysis = {
        group: filter.group_by,
        total_users: userIDs.length,
        attendance_rate: attendanceRate,
        attendance_count: attendanceCount
    }

    return response.json({
        status: "success",
        message: "Attendances have been analyzed",
        data: {
            analysis_period: {
                start_date: (filter.start_date).toISOString().slice(0, 10),
                end_date: (filter.end_date).toISOString().slice(0, 10)
            },
            grouped_analysis: groupedAnalysis
        }
    })
}

module.exports = { getAllAttendance, getAttendances, getSummary, getAnalysis, addAttendance }