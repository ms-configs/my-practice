import { Component } from "react";
import getCharacters from "../getCharacters/getCharacters";
import Button from "../button/button";
import Spinner from "../spinner/spinner";
import './oneCharacter.scss';



class OneCharacter extends Component {


    state = {
        char: {},
        loading: true,
        offset: this.props.offset
    }
    service = new getCharacters()

    componentDidMount = () => {
        this.service.getSpecificCharacter(this.state.offset)
            .then(obj => {
                this.setState({
                    char: {
                        name: obj.name,
                        thumb: obj.thumb,
                        url: obj.url
                    },
                    loading: false,
                    error: false
                })
            })
            .catch(this.onError);
    }
    onError = () => {
        this.setState({
            error: true
        })
    }
    getRandomId = () => {
        let number = Math.round(400 * Math.random() + 1000);
        console.log(number);
        return "101" + number;
    }

    render() {
        let { char: { name, thumb, url }, loading, error } = this.state;



        if (error) {    
            return (
                <div className="item__hero">Something went wrong</div>
            )
        }

        return (
            <div className="item__hero">
                <div className="item__hero_inner" onClick={this.props.onClick}>
                    {loading ? <Spinner /> : <img src={thumb} width={'200px'} height={'200px'} alt="hero" />}
                    <div className="header">{name}</div>
                </div>
                <Button url={url} name={'WIKI'}></Button>
            </div>
        )


    }

}


export default OneCharacter;