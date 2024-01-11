import { User } from 'src/app/models/user.model';

export interface RenewTokenResponse {
  ok: boolean;
  token: string;
  user: User;
}
