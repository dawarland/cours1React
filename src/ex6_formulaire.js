import React from 'react';

class Formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: [],
            changedTextValue: '',
            changedSelectValue: '0',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        let name = event.target.name;
        this.setState({ [name]: event.target.value } );
    }

    handleSubmit = (event) => {
        const newItems = Array.from(this.state.listItem);
        newItems.splice(
            this.state.changedSelectValue ,
            0,
            this.state.changedTextValue );
        this.setState(state => ({ listItem: newItems } ));
        /*this.setState(state => ({ listItem: Array.from(state.listItem).splice(
            state.changedSelectValue ,
            0,
            state.changedTextValue )
        } ));*/

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="changedTextValue" value={this.state.changedTextValue} onChange={this.handleInputChange} />
                    <select name="changedSelectValue" onChange={this.handleInputChange}>
                        <option value={this.state.listItem.length}>-- en dernier --</option>
                        { this.state.listItem.map(
                            (item) =>
                                <option value={this.state.listItem.indexOf(item)}>{item}</option>
                            )
                        }
                        {console.log(this.state)}
                    </select>
                    <input type="submit" value="Ajouter" />
                </form>
                <div>
                    <ul>
                        { this.state.listItem.map(
                            (item) =>
                                <li>{item}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        ) ;
    }

}

export default Formulaire;