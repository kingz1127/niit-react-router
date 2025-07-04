import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebarHome}>
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <Link to="/settings">Settings</Link>
      </div>
      <div>
        <Link to="/admin">Admin</Link>
      </div>
      <div>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}
