import style from './index.module.css'

const Ad = () => {
  return (
    <div className={style.ad}>
      <div className={style.title}>
        Welcome to
        <br /> Oceanledge
      </div>
      <div className={style.desc}>
        Children's Science Website for Marine
        <br /> Knowledge in Australia。
      </div>
      {/* <div className={style.learn}>Learn about</div> */}
    </div>
  );
};

export default Ad;
