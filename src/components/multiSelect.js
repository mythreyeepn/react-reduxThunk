import React from 'react';
import MultiSelect from '@khanacademy/react-multi-select';

const options =[
    {label: "Proxy Id", value: 'Proxy Id'},
    {label: "Plan Design", value: 'Plan Design'},
    {label: "Plan Name", value: 'Plan Name'},

];

class Option2 extends React.Component{
    state= {
        selected :[],
        rows :[]
    }


    handleChange = idx => e =>{
        const {name,value} = e.target
        const rows =[...this.state.selected]
        const newR=[...this.state.rows]
        newR[idx]['drp']=rows[idx];
        newR[idx][name]=value
        this.setState({rows:newR})

    }

    handleRemoveRows =(idx)=>{

        const selected =[...this.state.selected]
        selected.splice(idx,1)
        this.setState({selected})
    }

    onSelectedValueEvent = selected =>{
        const len = selected.length;
        const {rows} = this.state
        const newEmp= new Array(len)
        const newR={
            incValue="",
            excValue="",
            drp=""
        }
        newEmp.fill(newR,0)
        const newRows=[...rows,...newEmp]

        this.setState({
            selected,
            rows:newRows
        })
    }

getIncDetails(){
    const rows = this.state.rows
    if(rows[idx].IncExc=="inc"){
        return (<input type="text"
        name="incValue"placeholder="Inc Value"
        value={rows[idx].incValue}
        onChange={this.handleChange(idx)}
        className="form-control" />)
    }
    if(rows[idx].IncExc=="exc"){
        return (<input type="text"
        name="excValue"placeholder="Exc Value"
        value={rows[idx].excValue}
        onChange={this.handleChange(idx)}
        className="form-control" />)
    }
    if(rows[idx].IncExc=="both"){
        return (<div>
            <input type="text"
        name="incValue"placeholder="Inc Value"
        value={rows[idx].incValue}
        onChange={this.handleChange(idx)}
        className="form-control" />
        <br/>
        <input type="text"
        name="excValue"placeholder="Exc Value"
        value={rows[idx].excValue}
        onChange={this.handleChange(idx)}
        className="form-control" />
            </div>)
    }
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
                        onSelectedChanged={this.onSelectedValueEvent}/>
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
                                                     onChange={this.handleChange(idx)} checked={this.state.rows[idx].IncExc="inc"} /> Inc&nbsp;&nbsp;
                                                    /
                                                    <input type="radio" name="IncExc"
                                                    value={"exc"}
                                                     onChange={this.handleChange(idx)} checked={this.state.rows[idx].IncExc="exc"} /> Exc&nbsp;&nbsp;
                                                        <input type="radio" name="IncExc"
                                                    value={"both"}
                                                     onChange={this.handleChange(idx)}  checked={this.state.rows[idx].IncExc="both"} /> Both
                                                             </form>
                                            </td>
                                            <td>
                                            {this.state.selected[idx]}
                                            </td>
                                            <td>
                                               {this.getIncDetails()}
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