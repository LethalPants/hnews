export function toast(message, color = 'dark', duration = 4000) {
    const toast = document.createElement('ion-toast');
    toast.message = message;
    toast.duration = duration;
    toast.color = color.toLowerCase();
    toast.position = 'top';
    document.body.appendChild(toast);
    return toast.present();
}
