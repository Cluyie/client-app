import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { MachineObj } from '../app/models/imageType';
import { GetSingleMachine } from '../services/apicalls';

const MenubarTop = () => {
    const [logo, setLogo] = useState<MachineObj>({id: "dummy", imageData: "sd", imageTitle: "empty"});

    useEffect(() => {
        GetSingleMachine("A99ACFF1-7E8E-492F-B24E-7EA14461172B").then((result) => {
            setLogo(result);
        });
      }, [])
      
    const items = [
        {
            label: 'Hjem',
            icon:'fa-solid fa-house',
          
        },
        {
            label: 'Om',
            icon: 'fa-solid fa-circle-info',
            style: {color: "red"},
           
        },
        {
            label: 'Maskiner',
            icon: 'fa-solid fa-circle',
           
        }
        ,
        {
            label: 'Udlejning',
            icon: 'fa-solid fa-circle',
           
        }
    ];
    const url = "/assets/logo.jpg"
    const end = <img alt="logo"  src={url} height="40" className="mr-2 logoTop"></img>;
    return (
        <>
            <div>
                <Menubar model={items} end={end} />
            </div>
            <>
   
        </>
        </>
    );
}

export default MenubarTop;