export const shortenText = (text, n) => {
    if ( text.length > 0) {
        const shortenedText = text.substring(0, n).concat("...");
        return shortenedText;
    }
    return text;
}


export const validateEmail = (email) => {
   return email.match(
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
   )
}