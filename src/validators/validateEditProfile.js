export default function validateEditProfile(values) {
    let errors = {};

    //Name Errors
    if (!values.name) {
        errors.name = 'A username is required.';
    }

    //Email Errors
    if (!values.email) {
        errors.email = 'Email is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email is invalid.';
    }

    //Current Password Errors
    if (!values.currentPassword) {
        errors.currentPassword = 'Current password is required.';
    } else if (values.currentPassword.length < 6) {
        errors.currentPassword =
            'Current password must be at least 6 characters.';
    }

    //New Password Errors
    if (values.newPassword && values.newPassword.length < 6) {
        errors.password = 'New password must be at least 6 characters.';
    }

    return errors;
}
