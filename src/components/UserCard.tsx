import React from 'react'
import type {Person} from '../App'

type UserCardProps = {
    person: Person;
    age : number;
}

const UserCard = ({ person , age}:UserCardProps) => {
  return (
    <>
      <div>{person.user}</div>
      <div>{person.email}</div>
      <div>{person.fatheName}</div>
      <div>{age}</div>
    </>
  );
};


export default UserCard