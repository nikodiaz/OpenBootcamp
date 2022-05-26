export class Contact {
  name = '';
  last_name = '';
  email = '';
  status = false;

  constructor(name, last_name, email, status) {
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.status = status;
  }
}