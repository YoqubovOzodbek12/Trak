

import Car from '../../image/image 288.png';
import Ptc from '../../image/Icon.svg';
import One from '../../image/CarAbout/1.png'
import Two from '../../image/CarAbout/2.png'
import Tree from '../../image/CarAbout/3.png'
import Four from '../../image/CarAbout/4.png'
import Five from '../../image/CarAbout/5.png'

import cls from './AvtoAbout.module.css'



const AvtoAbout = () => {
  return (
    <div className={cls.about}>
      <div className={cls.container}>
        <div className={cls.about_box}>

          <div className={cls.about_left}>
            <p className={cls.about_left_text}>Только в АВТОРУСЬ!</p>
            <h4 className={cls.about_left_title}>TANK 300</h4>
            <p className={cls.about_left_desc}>Выгода по Trade-In до 450 000 ₽ </p>
            <div className={cls.about_left_error}>Ограниченное предложение!</div>
            <button className={cls.about_left_btn}>Узнать стоимость по акции</button><br />
            <button className={cls.about_left_btn_two}>Тест-драйв</button><br />
            <button className={cls.about_left_btn_two}>Рассчитать кредит</button>
          </div>

          <div className={cls.about_right}>
            <img className={cls.about_right_img} src={Car} alt="" />
            <div className={cls.about_right_box}>
              <button className={cls.about_right_yellow}></button>
              <button className={cls.about_right_red}></button>
              <button className={cls.about_right_while}></button>
              <button className={cls.about_right_green}></button>
              <button className={cls.about_right_black}></button>
            </div>
          </div>

        </div>
      </div>

      <div className={cls.container}>

        <div className={cls.about_services}>
          <div className={cls.about_services_ptc}>
            <img className={cls.about_services_img} src={Ptc} alt="" />
            <div>
              <p className={cls.about_services_text}>Автомобили в наличиис ПТС</p>
            </div>
          </div>
          <div className={cls.about_services_ptc}>
            <img className={cls.about_services_img} src={Ptc} alt="" />
            <div>
              <p className={cls.about_services_text}>Сервисная поддержка
                до 5 лет / 150 000 км</p>
            </div>
          </div>
          <div className={cls.about_services_ptc}>
            <img className={cls.about_services_img} src={Ptc} alt="" />
            <div>
              <p className={cls.about_services_text}>Улучшим любое
                предложение</p>
            </div>
          </div>
          <div className={cls.about_services_ptc}>
            <img className={cls.about_services_img} src={Ptc} alt="" />
            <div>
              <p className={cls.about_services_text}>Кредит 0,01%</p>
            </div>
          </div>
        </div>

        <div className={cls.about_foto}>
          <img className={cls.about_foto_img} src={One} alt="" />
          <img className={cls.about_foto_img} src={Two} alt="" />
          <img className={cls.about_foto_img} src={Tree} alt="" />
          <img className={cls.about_foto_img} src={Four} alt="" />
          <img className={cls.about_foto_img} src={Five} alt="" />
        </div>

      </div>
    </div >
  )
}
export default AvtoAbout