import Profil from '../../models/profil';

export const DELETE_PROFIL = 'DELETE_PROFIL';
export const CREATE_PROFIL = 'CREATE_PROFIL';
export const UPDATE_PROFIL = 'UPDATE_PROFIL';
export const SET_PROFILS = 'SET_PROFILS';

export const fetchProfils = () => {
  return async (dispatch, getState) => {
    // any async code you want!
    const userId = getState().auth.userId;
    try {
      const response = await fetch(
        'https://bio-finder-82a70.firebaseio.com/profils.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await response.json();
      const loadedProfils = [];

      for (const key in resData) {
        loadedProfils.push(
          new Profil(
            key,
            resData[key].ownerId,
            resData[key].ownerAddress,
            resData[key].farmAddress,
            resData[key].ownerZip,
            resData[key].farmZip,
            resData[key].ownerTel,
            resData[key].farmTel,
            resData[key].ownerTown,
            resData[key].farmTown,
            resData[key].farmDescription,
            resData[key].farmImage,
            resData[key].ownerStatus
          )
        );
      }

      dispatch({
        type: SET_PROFILS,
        profils: loadedProfils,
        userProfils: loadedProfils.filter(profils => profils.ownerId === userId)
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const deleteProfil = profilId => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await fetch(
      `https://bio-finder-82a70.firebaseio.com/profils/${profilId}.json?auth=${token}`,
      {
        method: 'DELETE'
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    dispatch({ type: DELETE_PROFIL, pid: profilId });
  };
};

export const createProfil = ( ownerAddress, farmAddress, ownerZip, farmZip, ownerTel, farmTel, ownerTown, farmTown, farmDescription, farmImage, ownerStatus) => {
  return async (dispatch, getState) => {
    // any async code you want!
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://bio-finder-82a70.firebaseio.com/profils.json?auth=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ownerAddress,
          farmAddress,
          ownerZip,
          farmZip,
          ownerTel,
          farmTel,
          ownerTown,
          farmTown,
          farmDescription,
          farmImage,
          ownerStatus,
          ownerId: userId
          
        })
      }
    );

    const resData = await response.json();

    dispatch({
      type: CREATE_PROFIL,
      profilData: {
        id: resData.name,
          ownerAddress,
          farmAddress,
          farmTel,
          ownerZip,
          farmZip,
          ownerTown,
          farmTown,
          farmDescription,
          farmImage,
          ownerStatus,
          ownerId: userId
      }
    });
  };
};

export const updateProfil = (id, ownerAddress, farmAddress, ownerZip, farmZip, ownerTel, farmTel, ownerTown, farmTown, farmDescription, farmImage, ownerStatus) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await fetch(
      `https://bio-finder-82a70.firebaseio.com/profils/${id}.json?auth=${token}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ownerAddress,
            farmAddress,
            ownerZip,
            farmZip,
            ownerTel,
            farmTel,
            ownerTown,
            farmTown,
            farmDescription,
            farmImage,
            ownerStatus
        })
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    dispatch({
      type: UPDATE_PROFIL,
      pid: id,
      profilData: {
            ownerAddress,
            farmAddress,
            ownerZip,
            farmZip,
            ownerTel,
            farmTel,
            ownerTown,
            farmTown,
            farmDescription,
            farmImage,
            ownerStatus
      }
    });
  };
};
