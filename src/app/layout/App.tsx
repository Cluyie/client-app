import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MachineObj } from '../models/imageType';
import Forside from '../../components/Pages/Forside';
import OmPage from '../../components/Pages/Om';
import Maskiner from '../../components/Pages/Maskiner';
import Udlejning from '../../components/Udlejning';
import MenubarTop from '../../components/TopMenu';
import Footer from '../../components/Footer';
import agent, { GetAll, GetSingleMachine } from '../../services/apicalls';

function App() {
  const [machines, setMachines] = useState<MachineObj[]>([]);
  const [rentalMachines, setRentalMachines] = useState<MachineObj[]>([]);

    useEffect(() => {
      agent.machines.list().then(response => {
        setMachines(response)
      })
      }, [])

     /*  useEffect(() => {
        GetAllRentals().then((result) => {
          setMachines(result);
        });
      }, []) */

  /* const [logo, setLogo] = useState<MachineObj>({id: "dummy", imageData: "sd", imageTitle: "empty"});

  useEffect(() => {
      GetSingleMachine("FC9E0FE3-DC11-4F14-872D-B314930F9255").then((result) => {
          setLogo(result);
      });
    }, []) */

  /*   const url = 'data:image/png;base64,' + logo.imageData; */
  const url = "/assets/Forside.jpg"
  

/*   useEffect(() => {
    axios.get('http://localhost:5000/api/machines').then(
      response => {
        console.log(response);
        setPhotos(response.data);
      }
    )
  }, [])

  const frontPage = (photoByte: string) =>  {
    var url = 'data:image/png;base64,' + photoByte;
    return <img src={url}/>
    
  }

  return (
    <div className="App">
      <header className="App-header">
       <ul>
          {photos!.map((photo: MachineObj) => (
            <li key={photo.id}>
              {frontPage(photo.imageData)}
              {photo.imageTitle}

            </li>
          ))}
       </ul>
      </header>
    </div>
  ); */
  const frontPage = () => {  
    return (
    <div className='contentMid'>
      <img src={url} className= 'imgStyle'></img>
        <Forside/>
    </div>
    );
  }

  const aboutpage = () => {  
    return (
    <div className='contentMid'>
      <img src={url} className= 'imgStyle'></img>
      <OmPage/>
    </div>
    );
  }

  const machinesPage = () => {  
    return (
    <div className='contentMid'>
      <Maskiner machines={machines}/>
    </div>
    );
  }

  const rentalPage = () => {  
    return (
    <div className='contentMid'>
      <Udlejning/>
    </div>
    );
  }
  
  return (

<div>
      
      <MenubarTop />
        <div className='contentMid'>
           {machinesPage()}
        </div>
      <Footer/>
</div>
  )  
}

export default App;
