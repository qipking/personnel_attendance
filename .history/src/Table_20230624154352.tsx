
export type Users = {
    UserID: string;
    EmpID: string;
    UserName: string;
    UserType: string;
    Password: string;
};

export type Permissions = {
    PermissionID: string;
    PermissionName: string;
    UserManage: string;
    ProfileEdit: string;
    OvertimeManage: string;
    BusinessTripManage: string;
    LeaveManage: string;
    AttendanceEdit: string;
    DBOperation: string;
    LogDelete: string;
};

export type Employees = {
    EmpID: string;
    Name: string;
    Gender: string;
    Age: string;
    Phone: string;
    Email: string;
    AttendanceID: string;
};

export type Attendance = {
    AttendanceID: string;
    EmpID: string;
    CheckIn1: string;
    CheckOut1: string;
    CheckIn2: string;
    CheckOut2: string;
    RecordDate: string;
};

export type Overtime = {
    OvertimeID: string;
    EmpID: string;
    Name: string;
    OvertimeType: string;
    StartTime: string;
    EndTime: string;
};

export type BusinessTrip = {
    TripID: string;
    EmpID: string;
    Name: string;
    TripType: string;
    StartDate: string;
    EndDate: string;
};

export type Leave = {
    LeaveID: string;
    EmpID: string;
    Name: string;
    LeaveType: string;
    StartDate: string;
    EndDate: string;
};

export type Log = {
    LogID: string;
    UserID: string;
    Operation: string;
    LogDate: string;
};

export type Statistics = {
    StatDate: string;
    OvertimeID: string;
    UserID: string;
    LateTimes: string;
};
