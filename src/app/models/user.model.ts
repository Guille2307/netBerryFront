export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public img?: string,
    public task?: string,
    public uid?: string
  ) {}
}
