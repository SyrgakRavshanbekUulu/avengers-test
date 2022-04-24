import { IShowTable } from 'pages/ShowTable/ShowTable.types';
import { client } from 'service/axios';

class Actions {
  getActions() {
    return client.get<IShowTable[]>('/action')
  }
}

export default Actions;
