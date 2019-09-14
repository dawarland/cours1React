import React from 'react';

class ButtonCycle extends React.Component {
    constructor (props) {
        super(props);
        this.state = { items: props.items, current: 0 };

        // Bind manuel
        this.handleClick = this.handleClick.bind(this);
    }

    // Bind automatique (syntaxe expérimentale)
    handleClick = () => {
        this.setState(state => ( (state.current==state.items.length-1)
            ? { current: 0 }
            : { current: ++(state.current) })
        );
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.items[this.state.current]}
            </button>
        );
    }
}

export default ButtonCycle;