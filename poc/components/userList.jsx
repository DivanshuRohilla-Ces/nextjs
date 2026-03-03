"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Link from "next/link";
import { useWindowWidth } from "@/app/hooks/useWindowWidth";

export default function Userlist({ users }) {
  const [userData, setUserData] = useState();
  const isMobile  = useWindowWidth();
  console.log(isMobile, "width");
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
     
<div>
      {users && users.map((user) => {
        const content = (
          <p
            onClick={() => setUserData(user)}
            style={{
              padding: "5px",
              cursor: "pointer",
              background: "grey",
              marginTop: "5px",
              color: "greenyellow",
            }}
          >
            {user.firstName} {user.lastName}
          </p>
        );

        if (isMobile) {
          return (
            <Link key={user.id} href={`/user?userId=${user.id}`}>
              {content}
            </Link>
          );
        }
        return (
          <div key={user.id}>
            {content}
          </div>
        );
      })}
    </div>
      {userData && !isMobile &&  <Sidebar user={userData} />}
    </div>
  );
}
