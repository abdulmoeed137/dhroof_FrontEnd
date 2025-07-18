import { GenericApiResponse } from '../../global-imports';

export interface LoginResponseDao extends GenericApiResponse {
  first_login: string;
  token: string;
}
