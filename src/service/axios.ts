import axios from 'axios';
import { baseUrl } from './config';

const client = axios.create({
  baseURL: `${baseUrl}`,
  headers: { 'Content-Type': 'application/json' },
});

export { client };
