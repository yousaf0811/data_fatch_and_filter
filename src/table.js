import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({data})=>{
    return(
        <table className="table table-hover">
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-mail</th>
                    <th>Gender</th>
                </tr>
                {data.map(items=>(
                                    <tr key={items.id} > 
                                    <td>{items.id}</td>                                    
                                    <td>{items.first_name}</td>
                                    <td>{items.last_name}</td>
                                    <td>{items.email}</td>
                                    <td>{items.gender}</td>
                
                                </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Table