import React, { Component } from 'react';
class MyComp extends Component {
    state = {
        txt : "No button clicked",
    };


    // clickedABC = ()=>{
    //     // 1) make copy of set object using spread operator
    //     console.log("clicked ABC");
    //     let s1 = {...this.state};
    //     s1.txt = "ABC";
    //     this.setState(s1); 
    // };
    //  clicked123 = ()=>{
    //     // make copy of set object using spread operator
    //     console.log("clicked 123");
    //     let s1 = {...this.state};
    //     s1.txt="123";
    //     this.setState(s1);
    //  };

     clickedBtn = (str) => {
        console.log("clicked " ,str);
        let s1 = {...this.state};
        s1.txt=str;
        this.setState(s1);
     }

    render (){
        console.log("In render method");
        return <React.Fragment>
            <button className ="btn btn-primary" 
            onClick={()=>this.clickedBtn("ABC")}>ABC</button>
            <button className ="btn btn-primary"
             onClick={()=>this.clickedBtn("123")}>123</button>
            <br/>
            {this.state.txt}
        </React.Fragment>
    }
}
export default MyComp;