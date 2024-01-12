export class User {
  constructor(
    public name: string,
    public email: string,
    public password?: string,
    public task?: string,
    public img?: string,
    public uid?: string
  ) {}
}
