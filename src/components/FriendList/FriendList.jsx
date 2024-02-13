import style from "./FriendList.module.css";
import clsx from "clsx";

function FriendListItem ({avatar, name, isOnline}) {
    const isOnLine = clsx(
        style.onlineInfo,
        isOnline ? style.friendsIsOnline : style.friendsIsOffline
      );
      return (
        <div>
          <img
          className={style.friendsImg}
          src={avatar}
          alt="Avatar"
          width="60"
          aria-label={`Avatar of ${name}`}
/>

          <p className={style.friendsName}>{name}</p>
          <p className={isOnLine}>{isOnline ? "Online" : "Offline"}</p>
        </div>
      );
}

export function FriendList ({ friends }) {
    return (
      <ul className={style.list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={style.item} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    );
  }