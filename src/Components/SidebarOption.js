import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <p className="ml-2 mt-2 d-none d-lg-block">{text}</p>
    </div>
  );
}

export default SidebarOption;