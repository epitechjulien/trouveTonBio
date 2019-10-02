import EVENT from '../../data/event-data';
import {
  DELETE_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
  SET_EVENT
} from '../actions/events';
import Events from '../../models/event';

const initialState = {
  availableEvents: [],
  userEvents: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENT:
      return {
        availableEvents: action.Events,
        userEvents: action.userEvents
      };
    case CREATE_EVENT:
      const newEvent = new Event(
        action.eventData.id,
        action.eventData.eventtypeId,
        action.eventData.ownerId,
        action.eventData.title,
        action.eventData.image,
        action.eventData.description,
        action.eventData.date
      );
      return {
        ...state,
        availableEvents: state.availableEvents.concat(newEvent),
        userEvents: state.userEvents.concat(newEvent)
      };
    case UPDATE_EVENT:
      const eventIndex = state.userEvents.findIndex(
        event => event.id === action.pid
      );
      const updatedEvent = new Event(
        action.pid,
        action.eventData.eventtypeId,
        state.userEvent[eventIndex].ownerId,
        action.eventData.title,
        action.eventData.image,
        action.eventData.description,
        state.userEvent[eventIndex].date
      );
      const updatedUserEvents = [...state.userEvents];
      updatedUserEvents[eventIndex] = updatedEvent;
      const availableEventIndex = state.availableEvents.findIndex(
        event => event.id === action.pid
      );
      const updatedAvailableEvents = [...state.availableEvents];
      updatedAvailableEvents [availableEventIndex] = updatedEvent;
      return {
        ...state,
        availableEvents: updatedAvailableEvents ,
        userEvents: updatedUserEvents
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        userEvents: state.userEvents.filter(
          event => event.id !== action.pid
        ),
        availableEvents: state.availableEvents.filter(
          event => event.id !== action.pid
        )
      };
  }
  return state;
};
