import React from 'react';
import { IonPage, IonContent } from '@ionic/react';

import SmallHeader from '../../components/Header/header.small';
import LargeHeader from '../../components/Header/header.large';
import LinkList from '../../components/Link/LinkList';

const News = (props) => {
    return (
        <IonPage>
            <SmallHeader title='HNews' />
            <IonContent fullscreen>
                <LargeHeader title='HNews' />
                <LinkList location={props.location} />
            </IonContent>
        </IonPage>
    );
};

export default News;
