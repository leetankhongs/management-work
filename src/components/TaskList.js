import React, { Component } from 'react';
import TaskItem from './TaskItem'
import '../App.css';
class TaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            Name: '',
            Status: -1
        }
    }

    changeStatus = (ID) =>{
        this.props.changeStatus(ID);
    }

    deleteTask = (ID) => {
        this.props.deleteTask(ID);
    }

    updateItem = (ID) =>{
        this.props.updateItem(ID);
    }
    
    onChangeValue = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        
        this.props.filterList(name === "Name"? value : this.state.Name, name === "Status"? value : this.state.Status)

        this.setState({
            [name]: value
        })

        
    }
    render() {

        var elements = this.props.taskList.map((task, index) => {
            return <TaskItem key = {index} task = {task} index = {index}
                    changeStatus = {this.changeStatus}
                    deleteTask = {this.deleteTask}
                    updateItem = {this.updateItem}/>
        })
        return (
            <table className="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" name = "Name" onChange = {this.onChangeValue} value = {this.state.Name}/>
                        </td>
                        <td>
                            <select className="form-control" name = "Status" onChange = {this.onChangeValue} value = {this.state.Status}>
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    
                    {elements}
                </tbody>
            </table>
        );
    }

}

export default TaskList;
