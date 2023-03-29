import React, {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value ?: string;
    type : string;

}

class Input extends React.Component<InputProps>{



    render() {
        return(
            <input type={this.props.type} value={this.props.value}></input>
        )
    }


}

export default Input