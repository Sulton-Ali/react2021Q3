export type Errors = {
  [key: string]: string;
};

export type User = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  married: boolean;
  haveChildren: boolean;
};

export type State = User & {
  users: User[];
};
