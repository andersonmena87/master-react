import { getDataLocal } from './LocalStorage';
import { Global } from './Global';

export const GetProfile = async(userId, setState) => {
    const request = await fetch(Global.url + 'user/user/' + userId, {
        method: 'GET',
        headers: {
          Authorization: getDataLocal('token'),
          'Content-Type': 'application/json'
        }
      });

      const data = await request.json();

      if(data.status === 'success'){
        setState(data.userStored);
      }

      return data;
};