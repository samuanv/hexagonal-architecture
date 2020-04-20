import Passenger from '../entities/Passenger';
import Trip from '../entities/Trip';
import TripRepository from '../repositories/trip.repository';
import Ticket from '../entities/Ticket';
import NotifierRepository from '../repositories/notifier.repository';

const saveBooking = (
  tripRepository: TripRepository,
  notifierRepository: NotifierRepository,
) => async (passenger: Passenger, tripId: string) => {
  const trip: Trip = await tripRepository.getById(tripId);
  const ticket: Ticket = {
    tripId: trip.id,
    tripName: trip.name,
    departureTime: trip.departureTime,
    arrivalTime: trip.arrivalTime,
    passengerName: passenger.name,
    passengerSurname: passenger.surname,
  };

  notifierRepository.notify(ticket, passenger.email);

  return ticket;
};

export default saveBooking;
