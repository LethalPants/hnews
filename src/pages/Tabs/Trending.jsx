import React from 'react';
import { IonPage, IonContent } from '@ionic/react';

import SmallHeader from '../../components/Header/header.small';
import LargeHeader from '../../components/Header/header.large';
import LinkList from '../../components/Link/LinkList';

const News = (props) => {
    return (
        <IonPage>
            <SmallHeader title='Trending' />
            <IonContent fullscreen>
                <LargeHeader title='Trending' />
                <LinkList location={props.location} />
            </IonContent>
        </IonPage>
    );
};

export default News;
