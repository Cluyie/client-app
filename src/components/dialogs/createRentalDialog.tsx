import { observer } from "mobx-react-lite";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button'
import { useStore } from "../../app/stores/store";
import { FileUpload } from 'primereact/fileupload';
import { useState } from "react";
import { Image } from 'primereact/image';
import { InputTextarea } from 'primereact/inputtextarea';
import agent from "../../services/apicalls";

const CreateRentalDialog = () => {
    const {rentalStore} = useStore();
    const {createDialogVisible, createEditMachine ,toggleCreateRentalDialogVisible, setImageText, setId, createRental, updateRentals, resetObject} = rentalStore;

    const onSave = async () => {
        let createOrEdit = "";
        if(createEditMachine.id == "") {
            createOrEdit = "CREATE";
            setId();
            if(createEditMachine.id.length > 0) {
                createRental(createEditMachine);
            }
        }
        else if(createEditMachine.id.length > 5) {
            updateRentals(createEditMachine);
        }
    }

    const cancel = () => {
        toggleCreateRentalDialogVisible();
        resetObject();
    }

    const renderFooter = () => {
        return (
            <div>
                <Button label="Cancel" icon="pi pi-times" onClick={() => cancel()} className="p-button-text" />
                <Button label="Save" icon="pi pi-check" onClick={() => onSave()} autoFocus />
            </div>
        );
    }
    const customBase64Uploader = async (event: any) => {
        // convert file to base64 encoded
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then(r => r.blob()); //blob:url
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
            let base64data = reader.result;
            if(base64data != null) {
                if(typeof(base64data) == "string") {
                    createEditMachine.imageData = base64data;
                }
               
            }
        }
    }

    

    return (
        <Dialog header="Opret udlejnings maskine" visible={createDialogVisible} style={{ width: '25vw' }} footer={renderFooter()} onHide={() => cancel()}>
            <div className="d-flex flex-column justify-content-center">
                <Image src={createEditMachine.imageData} alt="Image" width="250" height="250" preview />
            <InputTextarea className = "marginTop" value={createEditMachine.imageTitle} onChange={(e) => setImageText(e.target.value)} rows={5} cols={30} autoResize />
            <FileUpload className="marginTop" mode="basic" name="demo[]" accept="image/*" customUpload uploadHandler={customBase64Uploader} auto/>            
            </div>
        </Dialog>
    )
}

export default observer(CreateRentalDialog);