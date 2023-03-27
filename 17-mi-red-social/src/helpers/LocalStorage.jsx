export const saveDataLocal = (dataToStorage = {}) => {

    for (const prop in dataToStorage) {
        localStorage.removeItem(prop);
        localStorage.setItem(prop, JSON.stringify(dataToStorage[prop]));
    }
}

export const getDataLocal = (name) => {
    let value = '';
    const storage = localStorage.getItem(name);

    if (storage) {
        value = JSON.parse(storage);
    }

    return value;
}

export const deleteDataLocal = (name) => {
    const storage = localStorage.getItem(name);
    if (storage) {
        localStorage.removeItem(name);
    }
}
