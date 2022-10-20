import React from "react";
import './LogOut.css'
import { ReactComponent as ArrowLeftIcon } from "../../../../assets/image/arrow-left.svg"

export const LogOut = ({ setIsLoggedIn }) => {
  const logout = () => setIsLoggedIn(false)

  return (
    <section className="sidebarBottom">
      <button onClick={logout}>
       <ArrowLeftIcon height={25} width={25}/>
        <span>Exit</span>
      </button>
    </section>
  );
};
