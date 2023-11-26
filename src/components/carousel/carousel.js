import { Component } from "react";
import OneCharacter from "../oneCharacter/oneCharacter";
import rightArrow from '../../imgs/right-arrow.png';
import leftArrow from '../../imgs/left-arrow.png';
import PrimeChar from "../primeChar/primeChar";
import './carousel.scss';


function composeCharacters(offset, func) {
    let arr = [];
    for (let i = 1; i <= 4; i++) {
        arr.push(<OneCharacter offset={offset + i} key={offset + i} onClick={() => func(offset + i)} />);
    }
    return arr;
}


class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
            chosen: 1
        }
    }

    plusChars = () => {
        this.setState(({ offset }) => ({
            offset: offset + 1,
            chosen: offset + 2
        }))
    }
    minusChars = () => {
        if (this.state.offset === 0) {
            return;
        }
        this.setState(({ offset }) => ({
            offset: offset - 1,

        }))
    }
    getPrimeChar = (offset) => {
        this.setState(() => ({
            chosen: offset
        }))
    }

    render() {
        let arr = [...composeCharacters(this.state.offset, this.getPrimeChar)];

        let classRight = this.state.offset == 0 ? 'carousel__leftA grey' : 'carousel__leftA';

        return (
            <aside>
                <section className="carousel">
                    <div className="carousel__wrapper">
                        <div className="carousel__inner">
                            {arr}
                        </div>
                        <div className="carousel__buttons">
                            <div className={classRight} onClick={this.minusChars}><img src={leftArrow} alt="left arrow" /></div>
                            <div className="carousel__rightA" onClick={this.plusChars}><img src={rightArrow} alt="right arrow" /></div>
                        </div>
                    </div>
                </section>
                <section>
                        <PrimeChar chosen={this.state.chosen} key={this.state.chosen} />
                </section>
            </aside>
        )



    }

}


export default Carousel;