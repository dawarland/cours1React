import React from 'react';

class Accordion extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpen: false,
            header: props.header,
            content: props.content
        };

        // Bind manuel
        this.handleClick = this.handleClick.bind(this);
    }

    // Bind automatique (syntaxe expérimentale)
    handleClick = () => {
        this.setState(state => ( (state.isOpen)
            ? { isOpen: false }
            : { isOpen: true })
        );
    }

    render()
    {
        let rheader = <h1 onClick={this.handleClick}>{this.state.header}</h1>,
            rcontent=null;

        if(this.state.isOpen){
            rcontent = <p>{this.state.content}</p>
        }
        return (
            <div>
                {rheader}
                {rcontent}
            </div>
        );
    }
}

export default Accordion;