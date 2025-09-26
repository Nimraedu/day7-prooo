// import React from "react";
// import type { Person } from "../App";

// type UserCardProps = {
//   person: Person;
//   age: number;
// };

// const UserCard = ({ person, age }: UserCardProps) => {
//   return (
//     <>
//       <div className=" flex-col w-98 bg-amber-100  border-2  shadow-lg ">
//         <div>{person.email}</div>
//         <div>{person.fatherName}</div>
//         <div>{age}</div>
//         <div>{person.user}</div>
//       </div>
//     </>
//   );
// };

// export default UserCard;

import React from "react";
import type { User } from "../App";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";

type UserCardProps = {
  profile: User;
};

const UserCard = ({ profile }: UserCardProps) => {
  return (
   <div className=" flex items-center p-8 g-9 w-110 h-50 bg-white border-gray-400 rounded-2xl shadow-lg ">
       <div className="flex  bg-white gap-4">
         <div className="flex flex-col rounded-full size-28 relative ">
           <img src={profile.pic} className="rounded-full size-28" />
          {profile.verified && (<div className="rounded-full size-9 absolute bottom-0 right-2 bg-blue-700 ">< CheckBadgeIcon className=""  /></div>) } 
         </div>
         <div className="flex-col text-left p-4">
           <h1 className="text-black font-bold text-xl ">{profile.name??"Name"}</h1>
           <h2 className="text-gray-500 text-base">{(profile.title?.toUpperCase()??"in case of null")||"in case of empty"}</h2>
         </div>
       </div>
     </div>
  );
};

export default UserCard;
