import {User} from '../models/stateModels';

export class Validator {
  static textValidator(value: string | boolean): boolean {
    const regex = /^[a-zA-Zа-яА-Я]*$/;

    const valid = Boolean(String(value).match(regex));
    return valid;
  }

  static dateValidator(value: string | boolean): boolean {
    const valueDate = new Date(String(value));
    if (valueDate.getTime() > Date.now()) {
      return false;
    }
    if (!value) {
      return false;
    }
    return true;
  }

  static userValidator(user: User): boolean {
    return Boolean(
      user.firstName && user.lastName && user.dateOfBirth && user.gender,
    );
  }
}
