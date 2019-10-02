import Event from '../../models/event';

export const DELETE_EVENT = 'DELETE_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const SET_EVENT = 'SET_EVENT';

export const fetchEvents = () => {
  return async (dispatch, getState) => {
    // any async code you want!
    const userId = getState().auth.userId;
    try {
      const response = await fetch(
        'https://bio-finder-82a70.firebaseio.com/events.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await response.json();
      const loadedEvents = [];

      for (const key in resData) {
        loadedEvents.push(
          new Event(
            key,
            resData[key].eventtypeId,
            resData[key].ownerId,
            resData[key].title,
            resData[key].image,
            resData[key].description,
            resData[key].date
          )
        );
      }

      dispatch({
        type: SET_EVENT,
        events: loadedEvents,
        userEvents: loadedEvents.filter(event => event.ownerId === userId)
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const deleteEvent = eventId => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await fetch(
      `https://bio-finder-82a70.firebaseio.com/events/${eventId}.json?auth=${token}`,
      {
        method: 'DELETE'
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    dispatch({ type: DELETE_EVENT, pid: eventId });
  };
};

export const createEvent = (eventtypeId, title, image, description,date) => {
  return async (dispatch, getState) => {
    // any async code you want!
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://bio-finder-82a70.firebaseio.com/events.json?auth=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          eventtypeId,
          title,
          image,
          description,
          date,
          ownerId: userId
        })
      }
    );

    const resData = await response.json();

    dispatch({
      type: CREATE_EVENT,
      eventData: {
        id: resData.name,
        eventtypeId,
        title,
        image,
        description,
        date,
        ownerId: userId
      }
    });
  };
};

export const updateEvent = (id, eventtypeId,title, image, description, date) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await fetch(
      `https://bio-finder-82a70.firebaseio.com/events/${id}.json?auth=${token}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          eventtypeId,
          title,
          image,
          description,
          date,
        })
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    dispatch({
      type: UPDATE_EVENT,
      pid: id,
      eventData: {
        eventtypeId,
        title,
        image,
        description,
        date,
      }
    });
  };
};
