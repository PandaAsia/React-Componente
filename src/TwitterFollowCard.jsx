/* eslint-disable react/prop-types */
import { useState } from "react";
import "./app.css";
function TwitterFollowCard({
  children,
  UserName = "unknow", //es su valor por defecto si no revis su prop un valor
  //name,
  //isFollowing,
  formatUserName,
  //formattedUserName,
}) {
  const [isfollow, setIsFollow] = useState(false);

  const text = isfollow ? "siguiendo" : "seguir";
  const buttonClassName = isfollow
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollow(!isfollow);
  };
  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header ">
          <img
            className="tw-followCard-avatar"
            src={`https://unavatar.io/${UserName}`}
            alt="El avatar de chica waifu"
          />
          <div className="tw-followCard-info">
            <strong>{children}</strong>
            <span className="tw-followCard-infoUserName">
              {
                formatUserName(UserName)
                //formattedUserName
              }
            </span>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
          </button>
        </aside>
      </article>
    </>
  );
}

export default TwitterFollowCard;
