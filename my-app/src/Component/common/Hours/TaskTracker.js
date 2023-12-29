import { useState } from "react";
import axios from 'axios';
// import { Input } from 'semantic-ui-react';
import { Input, Button, Form, Select  } from 'semantic-ui-react';

const TaskTracker = (props) => {
    const [formData, setData] = useState({
        projectName: "-",
        ModuleName: "-",
        task: "-",
        subTask: "-",
        DefectId: "-",
        Defect_Cat: "-",
        Defect_Env : "-",
        PR_Available: "-",
        PR_Link: "-",
        Task_Done: "-",
    })

    const handleSubmit = (event) => {
        console.log('test the data--------> ', formData)
        axios.post('http://localhost:8080/createtask', formData).then((response) => {
            console.log('response--------->', response)
          }).catch((error) => {
            console.log('error', error)
          });
        event.preventDefault();

    }

    const taskOption = [
        { key: 'projectTask', value: 'projectTask', text: 'Project Task' },
        { key: 'defect', value: 'defect', text: 'Defect' },
        { key: 'Non_Productive', value: 'Non_Productive', text: 'Non Productive' },
    ]

    const defectEnv = [
        { key: 'prod', value: 'prod', text: 'Prod' },
        { key: 'sanity', value: 'sanity', text: 'sanity' },
        { key: 'UAT', value: 'UAT', text: 'UAT' },
    ]

    const defectcategory = [
        { key: 'low', value: 'low', text: 'low' },
        { key: 'medium', value: 'medium', text: 'medium' },
        { key: 'high', value: 'high', text: 'high' },
        { key: 'critical', value: 'critical', text: 'critical' },
        { key: 'blocker', value: 'blocker', text: 'blocker' },
    ]

    const booleanOption = [
        { key: 'yes', value: 'yes', text: 'YES' },
        { key: 'No', value: 'No', text: 'No' },
    ]

    return (
        <Form onSubmit={handleSubmit} style={{margin: "40px", padding: "20px"}}>
            <Form.Field>
                <label>Project Name</label>
                <Input fluid placeholder='Project Name' onChange={(e) => { setData({ ...formData, projectName: e.target.value }) }} />
            </Form.Field>
            <Form.Field>
                <label>Module Name</label>
                <Input placeholder='Module Name' onChange={(e) => setData({ ...formData, ModuleName: e.target.value })} />
            </Form.Field>
            <Form.Field>
                <label>Task</label>
                {/* <Input placeholder='Email Id' onChange={(e) => setData({ ...formData, email: e.target.value })} /> */}
                <Select placeholder='Task' options={taskOption}  onChange={(e, data) => setData({ ...formData, task: data.value })}  />
            </Form.Field>
            {formData.task === 'projectTask' &&
            <Form.Field>
                <label>Subtask</label>
                <Input placeholder='Email Id' onChange={(e) => setData({ ...formData, subTask: e.target.value })} />
                {/* <Select placeholder='SubTask' options={subTaskOption}  onChange={(e, data) => setData({ ...formData, subTask: data.value })}  /> */}
            </Form.Field> }
            {formData.task === "defect" &&
            <div>
            <Form.Field>
                <label>Defect Id</label>
                <Input placeholder='Defect Id' onChange={(e) => setData({ ...formData, DefectId: e.target.value })} />
                {/* <Select placeholder='Select your country' options={subTaskOption}  onChange={(e) => setData({ ...formData, subTask: e.target.value })}  /> */}
            </Form.Field>
            <Form.Field>
                <label>Defect Category</label>
                <Select placeholder='Defect Category' options={defectcategory}  onChange={(e) => setData({ ...formData, subTask: e.target.value })}  />
                {/* <Input placeholder='Defect Category' onChange={(e) => setData({ ...formData, Defect_Cat: e.target.value })} /> */}
            </Form.Field>
            <Form.Field>
                <label>Defect Enviroment</label>
                <Select placeholder='Defect Enviroment' options={defectEnv}  onChange={(e) => setData({ ...formData, subTask: e.target.value })}  />
                {/* <Input placeholder='Defect Enviroment' onChange={(e) => setData({ ...formData, Defect_Env: e.target.value })} /> */}
            </Form.Field>
            </div>
            }
            <Form.Field>
                <label>Task Description</label>
                <Input placeholder='Task Description' onChange={(e) => setData({ ...formData, Task_Done: e.target.value })} />
            </Form.Field>
            <Form.Field>
                <label>Task Done</label>
                <Input placeholder='Task Done' onChange={(e) => setData({ ...formData, Task_Done: e.target.value })} />
            </Form.Field>
            <Form.Field>
                <label>Pr Available </label>
                <Input placeholder='Pr Available' onChange={(e) => setData({ ...formData, PR_Available: e.target.value })} />
            </Form.Field>
            <Form.Field>
                <label>Pr Link</label>
                <Input placeholder='Pr Link' onChange={(e) => setData({ ...formData, PR_Link: e.target.value })} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default TaskTracker;