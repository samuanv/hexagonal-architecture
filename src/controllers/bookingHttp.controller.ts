import saveBooking from '../core/interactors';
import { Response, Request } from 'express';

const BookingController = async (request: Request, response: Response) => {
  const { body } = request;
  const { passenger, trip } = body;

  const ticket = await saveBooking(passenger, trip);
  response.json(ticket);
};
export default BookingController;
