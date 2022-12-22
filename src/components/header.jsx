function Header({ data, handleMark }) {
  let output = 0;
  const number = data
    .filter((item) => !item.isRead)
    .map((item) => !item.isRead).length;
  output = output += number;

  return (
    <header>
      <div className="heading">
        <h1>
          Notification <span>{output}</span>
        </h1>
        <h3 onClick={handleMark}>
          <a href="#">Mark all as read</a>
        </h3>
      </div>
    </header>
  );
}

export default Header;
