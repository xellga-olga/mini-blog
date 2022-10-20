import { LogOut } from "./LogOut/LogOut";
import { Novigation } from "./Novigation/Novigation";
import "./SideBar.css";
import { User } from "./User/User";

export const SideBar = ({ setIsLoggedIn }) => {
  return (
    <aside className="sidebar">
      <section className="sidebarTop">
        <User />
        <Novigation />
      </section>

      <LogOut setIsLoggedIn={setIsLoggedIn}/>
    </aside>
  );
};
