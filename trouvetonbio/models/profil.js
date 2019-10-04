class Profil {
    constructor(id, ownerId, ownerAddress, farmAddress, ownerZip, 
        farmZip, ownerTel, farmTel, ownerTown, farmTown, 
        farmDescription, farmImage, ownerStatus) {
      this.id = id;
      this.ownerId = ownerId;
      this.ownerAddress = ownerAddress;
      this.farmAddress = farmAddress;
      this.ownerZip = ownerZip;
      this.farmZip = farmZip;
      this.ownerTel = ownerTel;
      this.farmTel = farmTel;
      this.ownerTown = ownerTown;
      this.farmTown = farmTown;
      this.farmDescription = farmDescription;
      this.farmImage= farmImage;
      this.ownerStatus = ownerStatus;

    }
  }
  
  export default Profil;
  