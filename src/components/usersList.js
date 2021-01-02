import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import GridComponent from './GridComponent';
import "./styles.css";
import { getAllUsers } from '../thunk/thunk'


const UsersList = () => {

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  });
  const history = useHistory();

const AddUser = (e) => {
  e.preventDefault();
  history.push('/addUser');
}

  const headers = ["Name", "Age", "Occupation","Actions"];
  return (
    <div>
      <div className="test">
        <button className="btn btn-primary " onClick={AddUser}>Add User</button>
      </div>
      {users.users.length ? (
      <GridComponent
      headings={headers}
      values={users.users}
      />
       ) : ("No data")}
    </div>
  )
}

export default UsersList;
