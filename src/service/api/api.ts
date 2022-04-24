import Actions from './actions';
import Banks from './banks';

class ApiService {
  public banks = new Banks();
  public actions = new Actions();
}

export default new ApiService();
