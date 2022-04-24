import { IBanks } from 'pages/AddTranzaction/AddTranzaction.types';
import { client } from 'service/axios';

class Banks {
  getAllBanks() {
    return client.get<IBanks[]>('/banks')
  }
}

export default Banks;
