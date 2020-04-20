import saveBooking from './saveBooking.interactor';
import TripMongo from '../../dataSources/tripMongo.datasource';
import EmailNotifier from '../../dataSources/emailNotifier.datasource';

const tripRepository = new TripMongo();

const notifierRepository = new  EmailNotifier();
export default saveBooking(tripRepository, notifierRepository);
