
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { Menubar } from 'primereact/menubar';
import { observer } from 'mobx-react-lite';
import { useStore } from '../app/stores/store';

const MenubarTop = () => {
    const {machineStore} = useStore();
    const {toggleCreateDialogVisible} = machineStore;
    
    const {rentalStore} = useStore();
    const {toggleCreateRentalDialogVisible} = rentalStore;

    let items: any;
    const loggedIn: boolean = true;

    if(loggedIn) {
        items = [
            {
                label: 'Hjem',
                icon:'fa-solid fa-house',
                template: () => {
                    return (
                        <span className='d-flex flex-row justify-content topMenuSpan'>
                           <i className="fa-solid fa-house topMenuIcon"></i>
                                <NavLink to='/'>
                                    <p className='topMenuP'>
                                        Hjem
                                    </p>
                                </NavLink>
                        </span>
                    )
               }
    
              
            },
            {
                label: 'Om',
                icon: 'fa-solid fa-circle',
                style: {color: "red"},
                template: () => {
                    return (
                        <span className='d-flex flex-row justify-content topMenuSpan'>
                           <i className="fa-solid fa-circle-info topMenuIcon"></i>
                                <NavLink to='/om'>
                                    <p className='topMenuP'>
                                        Om
                                    </p>
                                </NavLink>
                        </span>
                    )
               }
                
               
            },
            {
                label: 'Maskiner',
                icon: 'fa-solid fa-circle',
                template: () => {
                     return (
                        <span className='d-flex flex-row justify-content topMenuSpan'>
                            <i className="fa-solid fa-circle topMenuIcon"></i>
                                <NavLink to='/Maskiner'>
                                    <p className='topMenuP'>
                                        Maskiner
                                    </p>
                                </NavLink>
                        </span>
                     )
                }
               
            }
            ,
            {
                label: 'Udlejning',
                icon: 'fa-solid fa-circle',
                template: () => {
                    return (
                        <span className='d-flex flex-row justify-content topMenuSpan'>
                           <i className="fa-solid fa-circle topMenuIcon"></i>
                                <NavLink to='/Udlejning' className="">
                                    <p className='topMenuP'>
                                        Udlejning
                                    </p>
                                </NavLink>
                        </span>
                    )
               }
            },
            {
                icon: "fa-solid fa-plus",
                items: [
                    {
                        label: "Ny maskine",
                        command: () => {
                            toggleCreateDialogVisible();
                        }
                    },
                    {
                        label: "Ny Udlejning",
                        command: () => {
                            toggleCreateRentalDialogVisible();
                        }
                    },
                ]
            }
        ];
    } else {
        items = [
            {
                label: 'Hjem',
                icon:'fa-solid fa-house',
                template: () => {
                    return (
                        <span className='d-flex flex-row justify-content topMenuSpan'>
                           <i className="fa-solid fa-house topMenuIcon"></i>
                                <NavLink to='/'>
                                    <p className='topMenuP'>
                                        Hjem
                                    </p>
                                </NavLink>
                        </span>
                    )
               }
    
              
            },
            {
                label: 'Om',
                icon: 'fa-solid fa-circle',
                style: {color: "red"},
                template: () => {
                    return (
                        <span className='d-flex flex-row justify-content topMenuSpan'>
                           <i className="fa-solid fa-circle-info topMenuIcon"></i>
                                <NavLink to='/om'>
                                    <p className='topMenuP'>
                                        Om
                                    </p>
                                </NavLink>
                        </span>
                    )
               }
                
               
            },
            {
                label: 'Maskiner',
                icon: 'fa-solid fa-circle',
                template: () => {
                     return (
                        <span className='d-flex flex-row justify-content topMenuSpan'>
                            <i className="fa-solid fa-circle topMenuIcon"></i>
                                <NavLink to='/Maskiner'>
                                    <p className='topMenuP'>
                                        Maskiner
                                    </p>
                                </NavLink>
                        </span>
                     )
                }
               
            }
            ,
            {
                label: 'Udlejning',
                icon: 'fa-solid fa-circle',
                template: () => {
                    return (
                        <span className='d-flex flex-row justify-content topMenuSpan'>
                           <i className="fa-solid fa-circle topMenuIcon"></i>
                                <NavLink to='/Udlejning' className="">
                                    <p className='topMenuP'>
                                        Udlejning
                                    </p>
                                </NavLink>
                        </span>
                    )
               }
            }
        ];
    }
    

    const url = "/assets/logo.jpg"
    const end = <img alt="logo"  src={url} height="40" className="mr-2 logoTop"></img>;
    return ( 
        <div>
        <Menubar model={items} end={end} />
    </div>
        
       /*  <Menu>
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
        </Menu> */
    );
}

export default observer(MenubarTop);