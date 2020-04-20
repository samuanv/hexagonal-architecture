import Ticket from '../entities/Ticket';

interface NotifierRepository {
  notify(ticket: Ticket, email: string): void;
}

export default NotifierRepository;
