import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import axios from 'axios';
import { MachineObj } from '../../app/models/imageType';
import { GetAll } from '../../services/apicalls';
import { Image } from 'primereact/image';

interface maskineObject {
    src: string;
    description: string;
}
interface Props {
    machines: MachineObj[];
}
const Maskiner  = (props: Props) => {
    /* const [photos, setPhotos] = useState<MachineObj[]>([]);

    useEffect(() => {
        GetAll().then((result) => {
            setPhotos(result);
        });
      }, []) */

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
        <div className='row marginBotTop20'>
        {props.machines.map((x) => {
             var url = 'data:image/png;base64,' + x.imageData;
             const header = <Image alt="maskiner" src={url} className= "imageStyling" preview style={{width: "100%", height: "100%"}}/>
        return (
            <div className='col-2 d-flex machinesMargin' style={{marginTop: "2%", marginLeft: "2%"}}>
                <Card header={header} >
                    {x.imageTitle}
                </Card>
            </div>
        )

    })
        }
    </div>
    )
};

export default Maskiner;