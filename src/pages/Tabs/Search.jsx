import React from 'react';
import { IonPage, IonContent } from '@ionic/react';

import SmallHeader from '../../components/Header/header.small';
import LargeHeader from '../../components/Header/header.large';

const News = () => {
    return (
        <IonPage>
            <SmallHeader title='Search' />
            <IonContent fullscreen>
                <LargeHeader title='Search' />
            </IonContent>
        </IonPage>
    );
};

export default News;
