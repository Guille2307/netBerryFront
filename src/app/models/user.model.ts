import { environment } from 'src/environments/environment';
import { Task } from '../dashboard/interfaces/userByIdResponse.interface';

const base_url = environment.base_url;

export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public task?: Task[],
    public img?: string,
    public _id?: string
  ) {}

  get imageUrl() {
    if (!this.img) {
      return `${base_url}/upload/users/no-image`;
    } else if (this.img?.includes('https')) {
      return this.img;
    } else if (this.img) {
      return `${base_url}/upload/users/${this.img}`;
    } else {
      return `${base_url}/upload/users/no-image`;
    }
  }
  get imgToModel() {
    return this.img;
  }
}
