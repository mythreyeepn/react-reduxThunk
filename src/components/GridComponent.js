import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Icon from "react-crud-icons";
//import  "../../node_modules/react-crud-icons/dist/react-crud-icons.css";
import "../../node_modules/react-crud-icons/dist/css/react-crud-icons.css"
import "./styles.css";

const GridComponent = (props) => {
    const { headings, values, deleteAction } = props;
    const dispatch = useDispatch();

    return (
        <table className="table table-striped table-bordered test">
            <tbody>
                <tr>
                    {headings.map((heading) => {
                        return <th key={heading}>{heading}</th>
                    })}
                </tr>
                {values.map((value) => {
                    return (
                        <tr key={value.id}>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>{value.occupation}</td>
                            <td >
                                <Icon
                                    name="edit"
                                    tooltip="Edit"
                                    size="small"
                                />
                                  <Icon
                                    name="delete"
                                    tooltip="delete"
                                    size="small"
                                />
                            </td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )


}

export default GridComponent