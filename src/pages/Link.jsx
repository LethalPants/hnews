import React from 'react';
import firebase from '../firebase';
import { Plugins } from '@capacitor/core';
import UserContext from '../contexts/userContext';
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import NavHeader from '../components/Header/NavHeader';
import { closeCircleOutline } from 'ionicons/icons';
import LinkItem from '../components/Link/LinkItem';
import { toast } from '../helpers/toast';
const { Browser } = Plugins;

const Link = (props) => {
    const { user } = React.useContext(UserContext);
    const [link, setLink] = React.useState(null);
    const linkId = props.match.params.linkId;
    const linkRef = firebase.db.collection('links').doc(linkId);

    React.useEffect(() => {
        getLink();
        // eslint-disable-next-line
    }, [linkId]);

    function getLink() {
        linkRef.get().then((doc) => {
            setLink({ ...doc.data(), id: doc.id });
        });
    }
    function handleDeleteLink() {
        linkRef.delete().catch((err) => {
            toast(err, 'danger');
        });
        props.history.push('/');
    }

    function postedByAuthUser(link) {
        return user && user.uid === link.postedBy.id;
    }

    async function openBrowser() {
        await Browser.open({
            url: link.url,
        });
    }

    return (
        <IonPage>
            <NavHeader
                title={link && link.description}
                option={link && postedByAuthUser(link)}
                icon={closeCircleOutline}
                action={handleDeleteLink}
            />
            <IonContent>
                {link && (
                    <>
                        <IonGrid>
                            <IonRow>
                                <IonCol class='ion-text-center'>
                                    <LinkItem
                                        link={link}
                                        browser={openBrowser}
                                    />
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Link;
