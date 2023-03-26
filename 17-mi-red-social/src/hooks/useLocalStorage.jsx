export const useLocalStorage = () => {
    
    const saveDataLocal = (dataToStorage = {}) => {

        for (const prop in dataToStorage) {
            localStorage.removeItem(prop);
            localStorage.setItem(prop, JSON.stringify(dataToStorage[prop]));
        }
    }

    const getDataLocal = (name) => {
        let value = '';
        const storage = localStorage.getItem(name);

        if (storage) {
            value = JSON.parse(storage);
        }

        return value;
    }

    const deleteDataLocal = (name) => {
        const storage = localStorage.getItem(name);
        if(storage){
            localStorage.removeItem(name);
        }
    }

    return {
        saveDataLocal,
        getDataLocal,
        deleteDataLocal
    };
}
