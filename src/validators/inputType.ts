export const inputTypes = [
    "button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month",
    "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"
];

const inputType = (value: string) => inputTypes.indexOf(value) !== -1;

export default inputType;