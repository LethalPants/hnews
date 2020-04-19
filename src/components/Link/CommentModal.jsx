import React from 'react';
import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonTextarea,
    IonIcon,
} from '@ionic/react';

import { closeOutline } from 'ionicons/icons';

const CommentModal = ({ isOpen, title, sendAction, closeAction, comment }) => {
    const [commentText, setCommentText] = React.useState(
        comment ? comment.text : ''
    );

    function handleSendAction(item) {
        sendAction(item);
        setCommentText('');
    }

    return (
        <IonModal isOpen={isOpen} onDidDismiss={closeAction}>
            <IonHeader translucent>
                <IonToolbar color='primary'>
                    <IonTitle>{title}</IonTitle>
                    <IonButtons slot='start'>
                        <IonIcon
                            onClick={closeAction}
                            icon={closeOutline}
                            style={{
                                fontSize: '1.5em',
                                cursor: 'pointer',
                            }}
                        ></IonIcon>
                    </IonButtons>
                    <IonButtons slot='end'>
                        <IonButton
                            onClick={() => handleSendAction(commentText)}
                        >
                            Send
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonTextarea
                    row={25}
                    cols={25}
                    placeholder='Add comment'
                    value={commentText}
                    onIonChange={(e) => setCommentText(e.target.value)}
                />
            </IonContent>
        </IonModal>
    );
};

export default CommentModal;
