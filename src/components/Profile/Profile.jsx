import style from "./Profile.module.css";

export function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={style.userCard}>
      <div>
        <img className={style.userImg} src={image} alt="User avatar" />
        <p className={style.userName}>{name}</p>
        <p className={style.userTag}> @{tag}</p>
        <p className={style.userLocation}>{location}</p>
      </div>

      <ul className={style.boxList}>
        <li className={style.boxItem}>
          <span className={style.title}>Followers</span>
          <span className={style.value}>{followers}</span>
        </li>
        <li className={style.boxItem}>
          <span className={style.title}>Views</span>
          <span className={style.value}>{views}</span>
        </li>
        <li className={style.boxItem}>
          <span className={style.title}>Likes</span>
          <span className={style.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
