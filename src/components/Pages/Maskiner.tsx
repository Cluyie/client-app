import  { useEffect } from 'react';
import { Card } from 'primereact/card';
import { MachineObj } from '../../app/models/imageType';
import { Image } from 'primereact/image';
import { useStore } from '../../app/stores/store';
import LoadingCompnent from '../loader';
import { observer } from 'mobx-react-lite';


interface Props {
}
const Maskiner  = (props: Props) => {
    const {machineStore} = useStore();
    const {loadMachines, machines, setConfirmDialogVisible, editMachine} = machineStore;

    const {userStore} = useStore();
    const {isLoggedIn} = userStore;
    
    useEffect(() => {
        if(machines.length === 0) loadMachines();
      }, [loadMachines, machines.length])

      

    if(machineStore.loadingInitial) return (<div className='contentMid'><LoadingCompnent/></div>)
    return (
        <div className='row marginBotTop20'>
        {machineStore.machines.map((x) => {
             //var url = 'data:image/png;base64,' + x.imageData;

             const header = (
                 <Image alt="maskiner" src={x.imageData} className= "imageStyling" preview />                
             ) 
        return (
            <div className='col-2 d-flex justify-content-center flex-column machinesMargin' style={{marginTop: "2%", marginLeft: "2%"}} key={x.id}>
                <div className='d-flex justify-content-start flex-row iconSpace'>
                    {isLoggedIn ? (
                        <>
                        <i className="fa-solid fa-trash iconSpace" onClick={() => setConfirmDialogVisible(x.id)}></i>
                        <i className="fa-sharp fa-regular fa-pen-to-square iconSpace" onClick={() => editMachine(x)}></i>
                        </>
                    ) : (
                        <></>
                    )}
                    
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

export default observer(Maskiner);