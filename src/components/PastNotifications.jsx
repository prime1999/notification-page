import Rizky from "./images/avatar-rizky-hasanuddin.webp";
import Kim from "./images/avatar-kimberly-smith.webp";
import chess from "./images/image-chess.webp";
import nat from "./images/avatar-nathan-peterson.webp";
import ann from "./images/avatar-anna-kim.webp";

function PastNotifications() {
  return (
    <>
      <div className="notification">
        <div className="flex">
          <img src={Rizky} alt="" />
          <h5>
            Rizky Hasanuddin <span>sent you a private message</span>
            <small>5 days ago</small>
          </h5>
        </div>
        <p>
          Hello, thanks for setting up the chess club, I've been a member for a
          few weeks now and I'm already having lots of fun and improving my game
        </p>
        <div className="past2">
          <div className="flex">
            <img src={Kim} alt="" />
            <h5>
              Kimberly Smith <span>commented on your picture</span>
              <small>1 week ago</small>
            </h5>
          </div>
          <div className="past2-img">
            <img src={chess} alt="" />
          </div>
        </div>
        <div className="past3">
          <div className="flex">
            <img src={nat} alt="" />
            <h5>
              Nathan Peterson <span>reacted to your recent post</span>
              <a href="#"> 5 end-game strategies to increase your win rate</a>
              <small>1 week ago</small>
            </h5>
          </div>
        </div>
        <div className="past4">
          <div className="flex">
            <img src={ann} alt="" />
            <h5>
              Anna Kim <span>left the group</span>
              <a href="#"> Chess club</a>
              <small>2 weeks ago</small>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default PastNotifications;
