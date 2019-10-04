
import {
  DELETE_PROFIL,
  CREATE_PROFIL,
  UPDATE_PROFIL,
  SET_PROFILS
} from '../actions/profils';
import Profil from '../../models/profil';


const initialState = {
  availableProfils: [],
  userProfils: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILS:
      return {
        availableProfils: action.Profils,
        userProfils: action.userProfils
      };
    case CREATE_PROFIL:
      const newProfil = new Profil(
        action.profilData.id,
        action.profilData.ownerId,
        action.profilData.ownerAddress,
        action.profilData.farmAddress,
        action.profilData.ownerZip,
        action.profilData.farmZip,
        action.profilData.ownerTel,
        action.profilData.farmTel,
        action.profilData.ownerTown,
        action.profilData.farmTown,
        action.profilData.farmDescription,
        action.profilData.farmImage,
        action.profilData.ownerStatus,
      );
      return {
        ...state,
        availableProfils: state.availableProfils.concat(newProfil),
        userProfils: state.userProfils.concat(newProfil)
      };
    case UPDATE_PROFIL:
      const profilIndex = state.userProfils.findIndex(
        profil => profil.id === action.pid
      );
      const updatedProfil = new Profil(
        action.pid,
        state.userProfils[profilIndex].ownerId,
        action.profilData.ownerAddress,
        action.profilData.farmAddress,
        action.profilData.ownerZip,
        action.profilData.farmZip,
        action.profilData.ownerTel,
        action.profilData.farmTel,
        action.profilData.ownerTown,
        action.profilData.farmTown,
        action.profilData.farmDescription,
        action.profilData.farmImage,
        action.profilData.ownerStatus
        
      );
      const updatedUserProfils = [...state.userProfils];
      updatedUserProfils[Index] = updatedProfil;
      const availableProfilIndex = state.availableProfils.findIndex(
        profil => profil.id === action.pid
      );
      const updatedAvailableProfils = [...state.availableProfils];
      updatedAvailableProfils [availableProfilIndex] = updatedProfil;
      return {
        ...state,
        availableProfils: updatedAvailableProfils ,
        userProfils: updatedUserProfils
      };
    case DELETE_PROFIL:
      return {
        ...state,
        userProfils: state.userProfils.filter(
          profil => profil.id !== action.pid
        ),
        availableProfils: state.availableProfils.filter(
          profil => profil.id !== action.pid
        )
      };
  }
  return state;
};
