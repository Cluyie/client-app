import { observer } from "mobx-react-lite";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useStore } from "../../app/stores/store";

const ConfirmRentalDialog = () => { 

    const {rentalStore} = useStore();
    const {confirmDialogVisible, confirm, setConfirmDialogInvisible} = rentalStore;

    const renderFooter = () => {
        return (
            <div>
                <Button label="Cancel" icon="pi pi-times" onClick={() => setConfirmDialogInvisible()} className="p-button-text" />
                <Button label="Save" icon="pi pi-check" onClick={() => confirm()} autoFocus />
            </div>
        );
    }
    return (
        <Dialog header="Header" visible={confirmDialogVisible} style={{ width: '25vw' }} footer={renderFooter()} onHide={() => setConfirmDialogInvisible()}>
             Er du sikker på du vil slette billedet?
        </Dialog>
    )

}

export default observer(ConfirmRentalDialog);