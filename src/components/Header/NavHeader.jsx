import React from 'react';
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
} from '@ionic/react';

const NavHeader = ({ title }) => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot='start'>
                    <IonBackButton defaultHref='/' />
                </IonButtons>
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default NavHeader;
