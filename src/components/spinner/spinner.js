import { Component } from "react";

import './spinner.scss';



class Spinner extends Component {
    render() {
        return (
            <div className="wait__animation">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", background: "rgb(162, 183, 204)", display: "block", shapeRrendering: "auto", width: "200px", height: "200px" }} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="30" cy="50" fill="#220b09" r="20">
                        <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"></animate>
                    </circle>
                    <circle cx="70" cy="50" fill="#d34c31" r="20">
                        <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="0s"></animate>
                    </circle>
                    <circle cx="30" cy="50" fill="#220b09" r="20">
                        <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"></animate>
                        <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1s" repeatCount="indefinite"></animate>
                    </circle>
                </svg>
            </div>
        )
    }
}

export default Spinner;