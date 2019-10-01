class Event {
  constructor(id, eventtypeId,ownerId, title, image, description, date) {
    this.id = id;
    this.eventtypeId=eventtypeId;
    this.ownerId = ownerId;
    this.title = title;
    this.image = image;
    this.description = description;
    this.date = date;
  }
}

export default Event;
