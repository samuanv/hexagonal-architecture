import saveBooking from './saveBooking.interactor';
import getOneById from './getOneById.interactor';
import TripMongo from '../../dataSources/tripMongo.datasource';
import EmailNotifier from '../../dataSources/emailNotifier.datasource';

const tripRepository = new TripMongo();

const notifierRepository = new  EmailNotifier();


export default {
    saveBooking: saveBooking(tripRepository, notifierRepository),
    // Pass repositories needed here
    getOneById: getOneById()
}
