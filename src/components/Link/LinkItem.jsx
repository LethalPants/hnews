import React from 'react';
import {
    IonCard,
    IonCardContent,
    IonList,
    IonBadge,
    IonLabel,
    IonIcon,
    IonText,
    IonItem,
} from '@ionic/react';

import {
    chevronUpCircleOutline,
    linkOutline,
    personCircleOutline,
    timeOutline,
    chatbubbleEllipsesOutline,
} from 'ionicons/icons';

import { getHostName } from '../../helpers/domain';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const LinkItem = ({ link, index, showCount, url, browser, handleUpVote }) => {
    return (
        <IonCard routerLink={url}>
            <IonCardContent class='ion-no-padding'>
                <IonList lines='none'>
                    <IonItem>
                        <IonBadge
                            style={{
                                verticalAlign: 'middle',
                            }}
                            slot='start'
                        >
                            {showCount && index}
                        </IonBadge>
                        <IonLabel>
                            <p
                                style={{
                                    alignItems: 'center',
                                    fontSize: '0.8rem',
                                    fontWeight: 'normal',
                                }}
                            >
                                <IonIcon
                                    icon={linkOutline}
                                    style={{
                                        verticalAlign: 'middle',
                                    }}
                                />{' '}
                                <IonText
                                    style={{
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    {getHostName(link.url)}
                                </IonText>
                            </p>
                            <div
                                className='ion-padding-vertical ion-text-wrap'
                                onClick={browser}
                            >
                                <strong style={{ fontSize: '1rem' }}>
                                    {link.description}
                                </strong>
                            </div>
                            <IonIcon
                                slot='icon-only'
                                icon={chevronUpCircleOutline}
                                color='primary'
                                onClick={() => handleUpVote()}
                                style={{
                                    fontSize: '1em',
                                    cursor: 'pointer',
                                    marginBottom: '4px',
                                }}
                            />{' '}
                            <p
                                style={{
                                    display: 'inline-block',
                                    alignItems: 'center',
                                    fontSize: '0.9 rem',
                                    fontWeight: 'normal',
                                }}
                            >
                                <IonText
                                    style={{
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    {link.voteCount}
                                </IonText>
                                {'  |  '}
                                <IonIcon
                                    icon={personCircleOutline}
                                    style={{
                                        verticalAlign: 'middle',
                                    }}
                                />{' '}
                                <IonText
                                    style={{
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    {link.postedBy.name}
                                </IonText>
                                {' | '}
                                <IonIcon
                                    icon={timeOutline}
                                    style={{
                                        verticalAlign: 'middle',
                                    }}
                                />{' '}
                                <IonText
                                    style={{
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    {formatDistanceToNow(link.created)}
                                </IonText>
                                {link.comments.length > 0 && (
                                    <>
                                        {' | '}
                                        <IonIcon
                                            icon={chatbubbleEllipsesOutline}
                                            style={{
                                                verticalAlign: 'middle',
                                            }}
                                        />{' '}
                                        <IonText
                                            style={{
                                                verticalAlign: 'middle',
                                            }}
                                        >
                                            {link.comments.length} comments
                                        </IonText>
                                    </>
                                )}{' '}
                            </p>
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonCardContent>
        </IonCard>
    );
};

export default LinkItem;
