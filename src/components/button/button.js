import {Component} from "react";
import './button.scss';



class Button extends Component {

    render() {
        let {url, name, onClick} = this.props;

        return(
            <div className="button" onClick={onClick}>
                <div className="button__wrapper">
                    <div className="button__inner">
                        <a href={url}>{name}</a>
                    </div>
                </div>
            </div>
        ) 
    }

}

export default Button;