

import React,{useState} from "react";

// function component usestae
function Example(){
    const [count,setCount]= useState[0];

return(

    <div>
        <p>
            you clicked {count} times
        </p>
        <button>onclick={()=>setCount(count+1)} Click me</button>
    </div>
);
}

// class component usestate

class Maple extends React.Component{
constructor(props){
    super(props);
    this.state={
        count:0
    }
}

render(){
    return(
        <div>
     <p>you clicked {this.state.count} times</p>
     <button> onClick={()=>this.state({count:this.state.count+1})} click</button>
        </div>

    )
}

}