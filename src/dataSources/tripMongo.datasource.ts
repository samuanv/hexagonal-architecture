import TripRepository from '../core/repositories/trip.repository';
import Trip from '../core/entities/Trip';
import MongoClient from 'mongodb';

class TripMongo implements TripRepository {
  public async getById(id: string): Promise<Trip> {
    const collection = await this.getCollection();
    const trip: Trip = await collection.findOne({ id });
    return trip;
  }

  /// COllection per request
  private async getCollection() {
    const url = 'mongodb://localhost:27017';
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });

    const db = client.db('ticketing');
    return db.collection('trips');
  }
}
export default TripMongo;
