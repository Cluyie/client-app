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
    const {loadRentals, rentals} = rentalStore;
    
    useEffect(() => {
        if(rentals.length === 0) loadRentals();
      }, [loadRentals, rentals.length])


    const handleCreateOrEditMachines = (machine: MachineObj) => {

    }

    if(rentalStore.loadingInitial) return (<div className='contentMid'><LoadingCompnent/></div>)

    return (
        <div className='row marginBotTop20'>
        {rentalStore.rentals.map((x) => {
             var url = 'data:image/png;base64,' + x.imageData;
             const header = <Image alt="maskiner" src={url} className= "imageStyling" preview />
        return (
            <div className='col-2 d-flex justify-content-center flex-column machinesMargin' style={{marginTop: "2%", marginLeft: "2%"}} key={x.id}>
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