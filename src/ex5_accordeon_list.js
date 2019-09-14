import React from 'react';
import Accordion from "./ex4_accordeon";

class AccordionList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            itemsList: props.items
        };
    }

    render()
    {
        return (
            <ul>
                { this.state.itemsList.map(
                        (item) =>
                        <Accordion header={item.header} content={item.content} />
                    )
                }
            </ul>
        );
    }
}

export default AccordionList;