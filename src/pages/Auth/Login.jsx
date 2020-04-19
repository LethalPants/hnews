import React from 'react';
import {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonButton,
    IonRouterLink,
    IonLoading,
    IonInput,
} from '@ionic/react';
import NavHeader from '../../components/Header/NavHeader';
import validateLogin from '../../validators/validateLogin';
import useForm from '../../hooks/useForm';
import firebase from '../../firebase';
import { toast } from '../../helpers/toast';

const INITIAL_STATE = {
    email: '',
    password: '',
};

const Login = (props) => {
    const { handleSubmit, handleChange, values, isSubmitting } = useForm(
        INITIAL_STATE,
        validateLogin,
        authenticateUser
    );
    const [busy, setBusy] = React.useState(false);

    async function authenticateUser() {
        setBusy(true);
        const { email, password } = values;
        try {
            await firebase.login(email, password);
            toast('Login Successful', 'success');
            props.history.push('/');
        } catch (err) {
            console.error('Authentication Error', err);
            toast(err.message, 'danger');
        }
        setBusy(false);
    }
    return (
        <IonPage>
            <NavHeader title='Log In' />
            <IonLoading message={'Please wait...'} isOpen={busy} />
            <IonContent className='ion-padding'>
                <IonItem lines='full'>
                    <IonLabel position='floating'>Email</IonLabel>
                    <IonInput
                        name='email'
                        type='text'
                        required
                        value={values.email}
                        onIonChange={handleChange}
                    ></IonInput>
                </IonItem>
                <IonItem lines='full'>
                    <IonLabel position='floating'>Password</IonLabel>
                    <IonInput
                        name='password'
                        type='password'
                        required
                        value={values.password}
                        onIonChange={handleChange}
                    ></IonInput>
                </IonItem>
                <IonButton
                    type='submit'
                    color='primary'
                    expand='block'
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                >
                    Log In
                </IonButton>
                <IonRouterLink
                    routerLink={'/forgot'}
                    className='ion-text-center ion-padding-vertical'
                >
                    Forgot Password?
                </IonRouterLink>
            </IonContent>
        </IonPage>
    );
};

export default Login;
