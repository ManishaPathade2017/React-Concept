
import React, { useEffect, useState } from "react";
import Table from '../common/Table';
import axios from 'axios';

const UserHome = () =>  {
    const [userTask, setUserTask] = useState([])
    const tableHeader = [
        "Employee Name",
        "projectName",
        "ModuleName",
        "task",
        "subTask",
        "DefectId",
        "Defect_Cat",
        "Defect_Env" ,
        "PR_Available",
        "PR_Link",
        "Task_Done",
    ]
    useEffect(() => {
        axios.get('http://localhost:8080/createtask').then((response) => {
            console.log('response--------->', response.data)
            setUserTask(response.data);
          }).catch((error) => {
            console.log('error', error)
          })
    }, []);


    return(
        <div>
            <Table userTask = {userTask}  tableHeader = {tableHeader}/>
        </div>
    )
}

export default UserHome;