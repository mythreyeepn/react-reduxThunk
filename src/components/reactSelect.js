import React from 'react'
import Select from 'react-select';

const options=[
    {label:'Select All', value='Select All'},
    {label:'apple', value='apple'},
    {label:'mango', value='mango'},
    {label:'fish', value='fish'},
    {label:'Shark', value='Shark'},
    {label:'guava', value='guava'}
];

class Selection extends React.Component{
    state={
        value=[],
        selectedOption:null,
        options:options
    }

    handleChange= selectedOption =>{
        let newselectValues=selectedOption
        if(selectedOption.length>0 &&  selectedOption.find(element => element.value==='Select All')){
            newselectValues=options.filter(element=>element.value!='Select All')
            this.setState({options:newselectValues})
        }
        if(selectedOption.length==0){
            this.setState({options:options})
        }
        if(selectedOption.length!==options.length){
            this.setState({selectedOption:newselectValues})
        }
        if(selectedOption.length==options.length-1){
            options.shift()
            this.setState({options})
        }
        if(options.length!=this.state.options){
            if(options.find(val=>val.value!="Select All")){
                const option_All=[{label:'Select All', value='Select All'}];
                option_All.push(options)
                this.setState({options:option_All})
            }
        }
    }

render(){
    const{selectedOption,options}=this.State;
return (
    <div>
        <div className="row">
            <div className="col-md-6 column">
            <Select
              value={selectedOption}
              className="basic-multi-select"
              classNamePrefix="select"
              isMulti
              isSearchable
              onChange={this.handleChange}
              options={options}/>
            </div>

        </div>
    </div>
)
}

}

export default Selectionsss