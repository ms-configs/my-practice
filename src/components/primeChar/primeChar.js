import { Component } from "react";
import getCharacters from "../getCharacters/getCharacters";
import Button from "../button/button";
import Spinner from "../spinner/spinner";
import './primeChar.scss';



class PrimeChar extends Component {

    state = {
        person: {},
        chosen: this.props.chosen,
        loading: true,
        error: false
    }
    service = new getCharacters()
    componentDidMount = () => {
        this.service.getSpecificCharacter(this.state.chosen)
            .then(item => {
                this.setState({
                    person: {
                        name: item.name,
                        description: item.description,
                        thumb: item.thumb,
                        comics: item.comics
                    },
                    error: false,
                    loading: false,
                })
            })
            .catch(this.onError)
    }



    onSubmit = (e) => {
        e.preventDefault();
        let input = document.querySelector('form input');
        let value = parseInt(input.value);
        if ((typeof value !== 'number') || Number.isNaN(value)) {
            alert('Числа от 0 до 1000');
            return;
        }
        this.setState(() => {
            return {
                chosen: value
            }
        })
        this.componentDidMount();
        input.value = '';
    }
    onError = () => {
        this.setState({
            error: true,
        })
    }

    render() {
        let { person: { name, description, thumb, comics }, loading, error } = this.state;

        if (error) return <h1>Something Went Wrong</h1>;

        description = description || 'Unfortunately there is have not text';

        return (

            <div className="prime__char">
                <form action="" className="prime__form" onSubmit={this.onSubmit}>
                    <input type="text" />
                    <input type="submit" />
                </form>
                <div className="prime__char_wrapper">
                    <div className="prime__char_inner" >
                        {loading ? <Spinner /> : <img src={thumb} alt="hero" className="prime__char_pic" />}
                        <h1 className="prime__char_name">
                            {name}
                        </h1>
                        <p className="prime__char_descr">
                            {description}
                        </p>
                        <Button name={'Comics'} url={comics + '?' + this.service._api} />
                    </div>
                </div>
            </div>

        )
    }
}


export default PrimeChar;