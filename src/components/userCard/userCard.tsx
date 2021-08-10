import React from 'react';
import {User} from '../../models/stateModels';

import './userCard.scss';

type UserCardProps = {
  user: User;
};

const UserCard = (props: UserCardProps): JSX.Element => {
  const user = props.user;
  return (
    <div className="user-card">
      <div className="user-card__row">
        <span className="user-card__row-key">Имя:</span>
        <span className="user-card__row-value">{user.firstName}</span>
      </div>
      <div className="user-card__row">
        <span className="user-card__row-key">Фамилия:</span>
        <span className="user-card__row-value">{user.lastName}</span>
      </div>
      <div className="user-card__row">
        <span className="user-card__row-key">Дата рождения:</span>
        <span className="user-card__row-value">{user.dateOfBirth}</span>
      </div>
      <div className="user-card__row">
        <span className="user-card__row-key">Пол:</span>
        <span className="user-card__row-value">{user.gender}</span>
      </div>
      <div className="user-card__row">
        <span className="user-card__row-key">Женат/замужем:</span>
        <span className="user-card__row-value">
          {user.married ? 'Да' : 'Нет'}
        </span>
      </div>
      <div className="user-card__row">
        <span className="user-card__row-key">Имеется ли детей:</span>
        <span className="user-card__row-value">
          {user.haveChildren ? 'Да' : 'Нет'}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
