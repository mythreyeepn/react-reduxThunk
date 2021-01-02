import React, {useEffect, useState} from 'react';
import { withRouter ,useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import {createUser} from '../thunk/thunk'

const AddUser = (props) =>{
    const [name ,setName] = useState("");
    const [age, setAge] = useState("");
    const [occupation, setOccupation] = useState("");
    const history = useHistory();


    const dispatch = useDispatch();
    const {userAdded} = useSelector((state) => {
    return {
        userAdded: state.users.userAdded
    };
});
  
    useEffect(() => {
        if (userAdded) {
            props.history.push(`/Users`);
        }
    }, [userAdded])

    const handleChanges = (e) => {
        if (e.target.name == "name") {
            setName(e.target.value)
        } else if (e.target.name == "age") {
            setAge(e.target.value)
        } else {
            setOccupation(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
     dispatch(createUser({name,age,occupation}));
    }

return(
    <div className="container test">
        <form id="add_user" onSubmit={handleSubmit} >
            <div className="form-group">
                <input type="text"
                placeholder="Name"
                className="form-control"
                name="name"
                onChange={handleChanges}
                value={name}/>
               
            </div>
            <div className="form-group">
                <input type="number"
                placeholder="Age"
                className="form-control"
                name="age"
                onChange={handleChanges}
                value={age}/>
            </div>
            <div className="form-group">
                <input type="text"
                placeholder="Occupation"
                className="form-control"
                name="occupation"
                onChange={handleChanges}
                value={occupation}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary" >Add</button>
            </div>
        </form>
    </div>
)

}

export default withRouter(AddUser);