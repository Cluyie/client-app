import { observer } from "mobx-react-lite";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useStore } from "../../app/stores/store";
import { InputText } from 'primereact/inputtext';
import { useState } from "react";
import { UserForm } from "../../app/models/user";

const LoginDialog = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {userStore} = useStore();
    const {login, LoginDialogVisible, setLoginDialogInvisible, logout} = userStore;

    const Submit = () => {
        var user: UserForm = {
            email: email,
            password: password
        }
        setPassword("");
        setEmail("");
        login(user);
    }

    const renderFooter = () => {
        if(userStore.isLoggedIn)
        return (
            <div>
                <Button label="Logout" icon="pi pi-times" onClick={() => logout()} className="p-button-text" />
                <Button label="Cancel" icon="pi pi-times" onClick={() => setLoginDialogInvisible()} className="p-button-text" />
                <Button label="Login" icon="pi pi-check" onClick={() => Submit()} autoFocus />
            </div>
        )
        else 
        return (
            <div>
                <Button label="Cancel" icon="pi pi-times" onClick={() => setLoginDialogInvisible()} className="p-button-text" />
                <Button label="Login" icon="pi pi-check" onClick={() => Submit()} autoFocus />
            </div>
        );
    }
    return (
        <Dialog header="Login" visible={LoginDialogVisible} style={{ width: '25vw' }} footer={renderFooter()} onHide={() => setLoginDialogInvisible()}>
            <div className="d-flex flex-row">
                <span className="p-float-label">
                    <InputText id= "email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="email">Email</label>
                </span>
                <span className="p-float-label" style={{marginLeft: 20}}>
                    <InputText id="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="Password">Password</label>
                </span>
            </div>
             
        </Dialog>
    )

}

export default observer(LoginDialog);