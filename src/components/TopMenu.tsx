
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const MenubarTop = () => {
    
      
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