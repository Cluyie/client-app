import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { MachineObj } from '../app/models/imageType';
import { GetSingleMachine } from '../services/apicalls';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

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
            NavLink,
            to: '/'

          
        },
        {
            label: 'Om',
            style: {color: "red"},
            
           
        },
        {
            label: 'Maskiner',
            icon: 'fa-solid fa-circle',
            command: () => {
                
            }
           
        }
        ,
        {
            label: 'Udlejning',
            icon: 'fa-solid fa-circle',
            NavLink,
            to: '/Udlejning'
           
        }
    ];
    const url = "/assets/logo.jpg"
    const end = <img alt="logo"  src={url} height="40" className="mr-2 logoTop"></img>;
    return ( 
        <Menu>
             <Menu.Item icon = {<i className="fa-solid fa-house colorRed"></i>} name='Hjem' as={NavLink} to='/'>
            </Menu.Item>
            
            <Menu.Item icon = {<i className="fa-solid fa-circle-info colorRed"></i>} name='Om' as={NavLink} to='/Om'>
            </Menu.Item>

            <Menu.Item icon = {<i className="fa-solid fa-circle colorRed"></i>} name='Maskiner' as={NavLink} to='/Maskiner'>
            </Menu.Item>

            <Menu.Item icon = {<i className="fa-solid fa-circle colorRed"></i>} name ='Udlejning' as={NavLink} to='/Udlejning'>
            </Menu.Item>

            <Menu.Item position='right'>
                {end}
            </Menu.Item>
        </Menu>


       /*  <>
            <div>
                <Menubar model={items} end={end} />
                <Menubar ></Menubar>
            </div>
            <>
   
        </>
        </> */
    );
}

export default MenubarTop;