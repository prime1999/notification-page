import { useState } from "react";
import Header from "./components/header";
import Notifications from "./components/notifications";
import Mark from "./components/images/avatar-mark-webber.webp";
import Angela from "./components/images/avatar-angela-gray.webp";
import Jacob from "./components/images/avatar-jacob-thompson.webp";
import Footer from "./components/footer";

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: "Mark Webber",
      img: <img src={Mark} alt="" />,
      notify: "reacted to your post",
      post: "My first tournament today!",
      time: "1m ago",
      isRead: false,
    },
    {
      id: 2,
      name: "Angela Gray",
      img: <img src={Angela} alt="" />,
      notify: "followed you",
      post: "",
      time: "5m ago",
      isRead: false,
    },
    {
      id: 3,
      name: "Jacob Thompson",
      img: <img src={Jacob} alt="" />,
      notify: "has joined your group",
      post: "Chess Club",
      time: "1 day ago",
      isRead: false,
    },
  ]);

  const onToggle = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: !notification.isRead }
          : notification
      )
    );
  };

  const onMark = () => {
    setNotifications(
      notifications.filter((notification) => (notification.isRead = true))
    );
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Header handleMark={onMark} data={notifications} />
        <Notifications handleToggle={onToggle} data={notifications} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
