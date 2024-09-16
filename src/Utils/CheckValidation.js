export const checkValidate = ( email, password) => {
    // const isNameValid = /^^[a-zA-Z0-9_-]{3,15}$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid)return "Email is not Valid !!!";
    if(!isPasswordValid)return "Password is not Valid !!!";
    // if(!isNameValid) return " Username contains invalid characters. Only letters, numbers, underscores, and hyphens are allowed"

    return null;
}