import React from 'react';
import { Card } from 'primereact/card';

interface maskineObject {
    src: string;
    description: string;
}
const Udlejning  = () => {
    const cardArray: maskineObject[] = [];
    const maskine1: maskineObject = {
        src: "images/gravko",
        description: "Jeg er en gravko. Jeg koster mange penge... "
    };
    cardArray.push(maskine1);
    /* const maskine2: maskineObject = {
        src: "images/dumper.png",
        description: "Det her er en gul dumper, og jeg er billig at leje."
    };
    cardArray.push(maskine2); */
    const maskine3: maskineObject = {
        src: "images/minigraver",
        description: "Jeg er en minigraver og kan bruges til mange forskellige ting. Det kan være dit og det kan være dat, men alt kan den bruges til"
    };
    cardArray.push(maskine3);
    const maskine4: maskineObject = {
        src: "images/traktor",
        description: "Jeg er en traktor Jeg er en traktor Jeg er en traktor Jeg er en traktor Jeg er en traktor Jeg er en traktor Jeg er en traktor Jeg er en traktor"
    };
    cardArray.push(maskine4);

    return (
        <div className='row'>
        {cardArray.map((x) => {
        const header = <img alt="maskiner" src={require("../../" + x.src + ".jpg").default} style={{height: "auto", width: "auto", maxWidth: "100%"}}/>
        return (
            <div className='col-3' style={{width: 200, height: 330, marginTop: 15, marginLeft: 10}}>
            <Card header={header} >
                {x.description}
            </Card>
            </div>
        )

    })
        }
    </div>
    )
};

export default Udlejning;