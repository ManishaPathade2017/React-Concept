import React from "react";
import DocumentView2 from './DocumentView2'
class DocumentView extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "Pink",
            showDom: false
        };
        
    }

    parentCallback = () => {
        console.log('test the');
        this.setState({showDom: true});
    }

    render() {
        return (
            <div>
                <h2>I am a Car!</h2>
                <DocumentView2 showData={this.state.color}  parentCallback={this.parentCallback}/>
                {this.state.showDom ? <p>Document view working fine</p> : ''}

            </div>
        )
    }
}

export default DocumentView;