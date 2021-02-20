import React from 'react';
import MultiSelect from '@khanacademy/react-multi-select';

const options =[
    {label: "Proxy Id", value: 'Proxy Id'},
    {label: "Plan  Design", value: 'Plan Design'},
    {label: "Plan Name", value: 'Plan Name'},

];

class Option2 extends React.Component{
    state= {
        selected :[],
        rows :[{
            name:"",
            IncExc:"inc",
            drp:""
        }]
    }

    getValue =(val,idx)=>{
        return true
    }

    handleChange =() =>{

    }

    handleRemoveRows =(idx)=>{
        const selected =[...this.state.selected]
        selected.splice(idx,1)
        this.setState({selected})
    }

    render(){
        const { selected } = this.state;
        return (
            <div className="container">
                <div className="row-sm-12">
                    <br/>
                    <br/>
                    <div className="col-sm-4">
                        <MultiSelect
                        options={options}
                        selected={selected}
                        onSelectedChange={selected => this.setState({selected})}/>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <br/>
                        <div className="row clearfix">
                            <div className="col-md-12 column">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>EXc/INC</th>
                                            <th>Criteria</th>
                                            <th>Value</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.selected.map((item,idx)=> (
                                            <tr key={idx}>
                                            <td>
                                                <form>
                                                    <input type="radio" name="IncExc"
                                                    value={"inc"}
                                                    checked={this.getValue("inc",idx)} onChange={this.handleChange(idx)}  />
                                                    /
                                                    <input type="radio" name="IncExc"
                                                    value={"exc"}
                                                    checked={this.getValue("exc",idx)} onChange={this.handleChange(idx)}  />
                                                             </form>
                                            </td>
                                            <td>
                                            {this.state.selected[idx]}
                                            </td>
                                            <td>
                                                {this.state.selected[idx]=="Plan Design" ? (
                                                    <select id="dropdown" name="subdrp">
                                                        <option value="N/A">Select</option>
                                                        <option value="N/A">Adult Embedded</option>
                                                        <option value="N/A">Alternate</option>
                                                        <option value="N/A">Adult Standalone</option>
                                                        <option value="N/A">Anthem Lumenos</option>
                                                    </select>
                                                ) : (
                                                    <input
                                                    type="text"
                                                    name="name"
                                                    value={this.state.selected[idx].name}
                                                    className="form-control" />
                                                ) }
                                            </td>
                                            <td>
                                                <button className="btn btn-outline-danger btn-sm" onClick={this.handleRemoveRows(idx)}>Remove</button>
                                            </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


     
}

export default Option2