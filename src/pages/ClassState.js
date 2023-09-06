import React, {Component} from "react";

class ClassState extends Component {
    // constructor initialize an object's state in class

    constructor(){
        super()
        this.state = {
            sampleContent: "Hello Worlds",
            bgcol:"red"
        };
        this.changeElement =this.changeElement.bind(this);
        //Binding Method 
    }
    changeElement(){
        // element = "Wow Nabago";
        // document.getElementById().innetHTML=
        // this.setState({sampleContent:"Jabol"})
        // this.setState({bgcol:"yellow"})
        this.state.bgcol == "red"? this.setState({sampleContent:"The unforgiven",bgcol:"yellow"}):this.setState({bgcol:"red"});
    }
    render(){
        const {bgcol,sampleContent}=this.state;
        return(
            <>
            <h1 id="sampleElement" style={{background:this.state.bgcol}}>{this.state.sampleContent}</h1>
            <button onClick={this.changeElement}>changeElement</button>
            {/* <button onClick={() => this.changeElement()}>Change Sample Element</button> */}
            </>
        );
    }
}

export default ClassState;