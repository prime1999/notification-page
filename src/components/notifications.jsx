import React from "react";
import NotificationList from "./NotificationList";
import PastNotifications from "./PastNotifications";

function Notifications({ data, handleToggle }) {
  return (
    <div className="content">
      <ul>
        <NotificationList handleToggle={handleToggle} data={data} />
        <PastNotifications />
      </ul>
    </div>
  );
}

export default Notifications;
