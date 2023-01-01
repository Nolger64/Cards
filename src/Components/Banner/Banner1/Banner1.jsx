import img from "../../assets/perfil.jpg";
import img2 from "../../assets/perfil2.jpg";
import img3 from "../../assets/perfil3.jpg";
import img4 from "../../assets/perfil4.jpg";
import img5 from "../../assets/perfil5.jpg";
import imgGaby from "../../assets/gaby.jpg";
import style from "./Banner1.module.css";
const Banner1 = () => {
  return (
    <div className={style.containerBanner1}>
      <div className={style.displayBanner1}>
        <Users status={1} name="Nolger R" img={img} />
        <Users status={2} name="Alan R" img={img2} />
        <Users status={2} name="Roger D" img={img3} />
        <Users status={2} name="Gaby Z" img={imgGaby} />
        <Users status={1} name="Juanes M" img={img4} />
        <Users status={1} name="Ana M" img={img5} />
      </div>
    </div>
  );
};
const Users = (props) => {
  return (
    <div className={style.containerUsers}>
      <div className={style.usersImg}>
        <img src={props.img} className={style.img} />
        {props.status == 1 ? (
          <span className={style.statusOn}></span>
        ) : (
          <span className={style.statusOff}></span>
        )}
      </div>
      <h1 className={style.nameUsers}>{props.name}</h1>
      <div className={style.containerBtn}>
        <button className={style.btnFollow}>Seguir</button>
        <button className={style.btnIgnore}>Ignorar</button>
      </div>
    </div>
  );
};
export default Banner1;
