import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const TablePagination = (props) => {

    const [task, setTask] = useState();

    useEffect(() => {
        console.log('props.userTask------------->', props.userTask)
        setTask(props.userTask);
    }, [props.userTask])

    return (
        // task.map(ele => {
        <Table celled>
            <Table.Header>
                <Table.Row>
                    {props.tableHeader.map(ele => <Table.HeaderCell>{ele}</Table.HeaderCell>)}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                    {task ? task.map((ele) =>
                        <Table.Row>
                        <Table.Cell>{ele.projectName? ele.projectName: '-'}</Table.Cell>
                        <Table.Cell>{ele.ModuleName? ele.ModuleName : '-'}</Table.Cell>
                        <Table.Cell>{ele.task ? ele.task : '-'}</Table.Cell>
                        <Table.Cell>{ele.subTask ? ele.subTask : '-'}</Table.Cell>
                        <Table.Cell>{ele.DefectId ? ele.DefectId : '-'}</Table.Cell>
                        <Table.Cell>{ele.Defect_Cat ? ele.Defect_Cat : '-'}</Table.Cell>
                        <Table.Cell>{ele.PR_Available ? ele.PR_Available : '-'}</Table.Cell>
                        <Table.Cell>{ele.PR_Link ? ele.PR_Link : '-'}</Table.Cell>
                        <Table.Cell>{ele.Task_Done ? ele.Task_Done : '-'}</Table.Cell>
                        <Table.Cell>{ele.Task_Done ? ele.Task_Done : '-'}</Table.Cell>
                        </Table.Row>
                    ) : ''}
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='10'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}
export default TablePagination