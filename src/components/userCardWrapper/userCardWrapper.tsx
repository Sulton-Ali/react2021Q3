import React from 'react';
import {User} from '../../models/stateModels';
import UserCard from '../userCard/userCard';

import './userCardWrapper.scss';

type UserCardWrapperProps = {
  users: User[];
};

export default function UserCardWrapper(
  props: UserCardWrapperProps,
): JSX.Element {
  return (
    <div className="user-card-wrapper">
      {props.users.map((user: User, idx: React.Key | null | undefined) => (
        <UserCard user={user} key={idx} />
      ))}
    </div>
  );
}
