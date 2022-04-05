import React from "react"

const TableBody = (props) => {
    const rows = props.todoData.map((row, index) => {
        return (
            <tr key={index}>
                <td>
                    <input 
                        type={"checkbox"}
                        checked={row.check} 
                        onClick={() => props.removeTodo(index)} />
                </td>
                <td>{row.task}</td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>

}

const Table = (props) => {
    const {todoData, removeTodo} = props;


    return (
        <table>
            <TableBody todoData={todoData} removeTodo={removeTodo}/>
        </table>
    )
}

export default Table;