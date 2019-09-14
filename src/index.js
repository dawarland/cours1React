import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Horloge from './ex1_horloge';
import Counter from './ex2_counter';
import ButtonCycle from './ex3_bouton';
import Accordion from './ex4_accordeon';
import AccordionList from './ex5_accordeon_list';
import Formulaire from './ex6_formulaire';
import SpeedChecker from './ex7_radar';

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

/*function step() {
    let now = new Date();
    ReactDOM.render(
        <Horloge time={now}/>,
        document.getElementById('root')
    );
}

setInterval(step, 1000);*/

//ReactDOM.render(<Counter start={3} step={5}/>, document.getElementById('root'));

//ReactDOM.render(<ButtonCycle items={["ONE" , "TWO" , "THREE"]}/>, document.getElementById('root'));

//ReactDOM.render(<Accordion header="Titre" content="Lorem ipsum" />, document.getElementById('root'));

/*const accordions = [
    { header: 'Titre 1', content: 'Contenu 1' },
    { header: 'Titre 2', content: 'Contenu 2' },
    { header: 'Titre 3', content: 'Contenu 3' },
];

ReactDOM.render(
    <AccordionList items={accordions}/>,
    document.getElementById('root')
);*/

//ReactDOM.render(<Formulaire />, document.getElementById('root'));

ReactDOM.render(<SpeedChecker />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
