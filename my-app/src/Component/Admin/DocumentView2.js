import React from "react";

class DocumentView2 extends React.Component {
    constructor(props) {
        super();
        this.state = {
            color: ''
        };
    }

    static getDerivedStateFromProps(props, state) {
        if(props.color !== state.color){
            return{
                color: props.color
            }
        }
    }

     triggerEvent = () => {
        console.log('test the child component');
        this.props.parentCallback("Data from child");


     }



    render() {
        return (
            <div>
                <h2>{this.props.showData}</h2>
                <button onClick={this.triggerEvent}>Button Click</button>
            </div>
        )
      }
}

export default DocumentView2;