export const SerializeForm = (form) => {
    const formData = new FormData(form);

    const completeObject = {};

    for( const [name, value] of formData){
        completeObject[name] = value;
    }

    return completeObject;
}
