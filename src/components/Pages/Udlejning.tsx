import  { useEffect } from 'react';
import { Card } from 'primereact/card';
import { MachineObj } from '../../app/models/imageType';
import { Image } from 'primereact/image';
import { useStore } from '../../app/stores/store';
import LoadingCompnent from '../loader';
import { observer } from 'mobx-react-lite';

interface maskineObject {
    src: string;
    description: string;
}
const Udlejning  = () => {
    const {rentalStore} = useStore();
    const {loadRentals, rentals, setConfirmDialogVisible, editMachine} = rentalStore;
    
    useEffect(() => {
        if(rentals.length === 0) loadRentals();
      }, [loadRentals, rentals.length])



    if(rentalStore.loadingInitial) return (<div className='contentMid'><LoadingCompnent/></div>)

    return (
        <div className='row marginBotTop20'>
        {rentalStore.rentals.map((x) => {
             const header = <Image alt="maskiner" src={x.imageData} className= "imageStyling" preview />
        return (
            <div className='col-2 d-flex justify-content-center flex-column machinesMargin' style={{marginTop: "2%", marginLeft: "2%"}} key={x.id}>
                 <div className='d-flex justify-content-center flex-row iconSpace'>
                    <i className="fa-solid fa-trash iconSpace" onClick={() => setConfirmDialogVisible(x.id)}></i>
                    <i className="fa-sharp fa-regular fa-pen-to-square iconSpace" onClick={() => editMachine(x)}></i>
                </div>
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

export default observer(Udlejning);