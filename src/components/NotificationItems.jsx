import { FaCircle } from "react-icons/fa";

function NotificationItems({ item, handleToggle }) {
  return (
    <div
      onClick={() => handleToggle(item.id)}
      className={`notification flex ${!item.isRead ? "read" : ""}`}
    >
      {item.img}
      <h5>
        {item.name} <span>{item.notify}</span>
        <a href="#"> {item.post}</a>
        {!item.isRead ? (
          <FaCircle
            style={{ color: "red", fontSize: "10px", marginLeft: "5px" }}
          />
        ) : (
          ""
        )}
        <small>{item.time}</small>
      </h5>
    </div>
  );
}

export default NotificationItems;
