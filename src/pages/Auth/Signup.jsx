import React from 'react';
import {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonRow,
    IonCol,
    IonButton,
    IonLoading,
} from '@ionic/react';

import NavHeader from '../../components/Header/NavHeader';
import { toast } from '../../helpers/toast';
import useForm from '../../hooks/useForm';
import validateSignup from '../../validators/validateSignup';
import Firebase from '../../firebase';

const Signup = (props) => {
    const INITIAL_STATE = { name: '', email: '', password: '' };

    const { handleSubmit, handleChange, values, isSubmitting } = useForm(
        INITIAL_STATE,
        validateSignup,
        authenticateUser
    );

    const [busy, setBusy] = React.useState(false);

    async function authenticateUser() {
        setBusy(true);
        const { name, email, password } = values;
        try {
            await Firebase.register(name, email, password);
            toast('Successfully registered', 'success');
            props.history.push('/');
        } catch (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            toast(err.message, 'danger');
        }
        setBusy(false);
    }

    return (
        <IonPage>
            <NavHeader title='Sign Up' />
            <IonLoading message={'Please wait...'} isOpen={busy} />
            <IonContent className='ion-padding'>
                <IonItem lines='full'>
                    <IonLabel position='floating'>Username</IonLabel>
                    <IonInput
                        name='name'
                        type='text'
                        required
                        value={values.name}
                        onIonChange={handleChange}
                    ></IonInput>
                </IonItem>
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
                <IonRow>
                    <IonCol>
                        <IonButton
                            type='submit'
                            color='primary'
                            expand='block'
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            Sign Up
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Signup;
