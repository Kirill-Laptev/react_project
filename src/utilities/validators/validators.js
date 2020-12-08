export const requiredField = (value) => {
    if(value) return undefined;
    return 'Field is required';
}

export const maxLength30 = (value) => {
	if(value && value.lenght > 30) return 'Max length is 30 symbols';
	return undefined; 
}


export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
        return undefined;
    }
}