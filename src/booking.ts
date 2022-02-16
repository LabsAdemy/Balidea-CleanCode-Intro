export enum BookingStatus {
  REQUESTED,
  PAID,
  RESERVED,
  NOTIFIED,
}
export class Booking {
  public id: string | undefined;
  public tripId: string;
  public travelerId: string;
  public paymentId: string | undefined;
  public passengersCount: number; // 🧼 distinction between a list and a value
  public status: BookingStatus = BookingStatus.REQUESTED;
  public price = 0;
  public hasPremiumFoods = false;
  public extraLuggageKilos = 0; // 🧼 full descriptive name
  public operatorReserveCode: string | undefined;
  constructor(tripId: string, travelerId: string, passengersCount: number) {
    this.tripId = tripId;
    this.travelerId = travelerId;
    this.passengersCount = passengersCount;
  }
}
