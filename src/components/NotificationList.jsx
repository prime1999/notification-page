import React from "react";
import NotificationItems from "./NotificationItems";

function NotificationList({ data, handleToggle }) {
  return (
    <>
      {data.map((item) => (
        <NotificationItems
          handleToggle={handleToggle}
          key={item.id}
          item={item}
        />
      ))}
    </>
  );
}

export default NotificationList;
