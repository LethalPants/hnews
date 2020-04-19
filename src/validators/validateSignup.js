export default function validateSubmit(values) {
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

    //Password Errors
    if (!values.password) {
        errors.password = 'A password is required.';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 6 characters.';
    }

    return errors;
}
