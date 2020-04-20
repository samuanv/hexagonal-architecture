import Trip from '../entities/Trip';

interface TripRepository {
  getById(id: string): Promise<Trip>;
}
export default TripRepository;
