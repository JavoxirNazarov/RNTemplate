import axios from 'axios';
import { API_BASE_URL } from 'src/config/constants';

export async function get<T>() {
  const response = await axios.get<T>(API_BASE_URL);

  return response.data;
}

export async function post<T>(path: string, body: any) {
  const response = await axios.post<T>(path, body);

  return response.data;
}
