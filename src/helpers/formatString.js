export const formatString = (s) => {
    const words = s.split(" ");

    const finalString = words.reduce((accumulator, currentValue) => {
        const firstLetter = currentValue.charAt(0).toUpperCase();
        const rest = currentValue.slice(1);

        const final = firstLetter + rest;

        return accumulator + final + " ";
    }, "")

    return finalString.trim();
}