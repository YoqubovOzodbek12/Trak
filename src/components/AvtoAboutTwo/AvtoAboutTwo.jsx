
import Ptc from '../../image/Icon.svg';

import One from '../../image/CarAboutTwo/1.png'
import Two from '../../image/CarAboutTwo/2.png'
import Tree from '../../image/CarAboutTwo/3.png'
import Four from '../../image/CarAboutTwo/4.png'
import Five from '../../image/CarAboutTwo/5.png'

import car1 from '../../image/carstwo/1.png';
import car2 from '../../image/carstwo/2.png';
import car3 from '../../image/carstwo/3.png';
import car4 from '../../image/carstwo/4.png';

import cls from './AvtoAboutTwo.module.css'
import { useState } from 'react';

const AvtoAboutTwo = () => {


  const cars = [
    {
      img: car1,
      color: "#E6E7E8",
      name: "red"
    },
    {
      img: car2,
      color: "#A2A4AB",
      name: "green"
    },
    {
      img: car3,
      color: "#000",
      name: "yellow"
    },

    {
      img: car4,
      color: "#B0A798",
      name: "yellow"
    },
  ]


  const [img, setImage] = useState(cars[3]['img']);
  const [color, setColor] = useState();

  return (
    <div className={cls.about_two}>
      <div className={cls.container}>
        <div className={cls.about_two_box}>

          <div className={cls.about_two_right}>
            <div className={cls.about_two_right_box}>
              {
                cars.map((item, index) => {
                  return (
                    <button
                      onClick={() => {
                        setImage(item.img)
                        setColor(item.color)
                      }}

                      style={{ backgroundColor: item.color }} className={cls.image__button}></button>
                  )
                })
              }
            </div>
            <img className={cls.about_two_right_img} src={img} alt="" />
            <div className={cls.about_two_left}>
              <p className={cls.about_two_left_text}>Только в АВТОРУСЬ!</p>
              <h4 className={cls.about_two_left_title}>TANK 300</h4>
              <p className={cls.about_two_left_desc}>Выгода по Trade-In до 450 000 ₽ </p>
              <div className={cls.about_two_left_error}>Ограниченное предложение!</div>
              <button className={cls.about_two_left_btn}>Узнать стоимость по акции</button><br />
              <button className={cls.about_two_left_btn_two}>Тест-драйв</button><br />
              <button className={cls.about_two_left_btn_two}>Рассчитать кредит</button>
            </div>
          </div>

        </div>
      </div>
      <div className={cls.container}>

        <div className={cls.about_two_services}>
          <div className={cls.about_two_services_ptc}>
            <img className={cls.about_two_services_img} src={Ptc} alt="" />
            <div>
              <p className={cls.about_two_services_text}>Автомобили в наличиис ПТС</p>
            </div>
          </div>
          <div className={cls.about_two_services_ptc}>
            <img className={cls.about_two_services_img} src={Ptc} alt="" />
            <div>
              <p className={cls.about_two_services_text}>Сервисная поддержка
                до 5 лет / 150 000 км</p>
            </div>
          </div>
          <div className={cls.about_two_services_ptc}>
            <img className={cls.about_two_services_img} src={Ptc} alt="" />
            <div>
              <p className={cls.about_two_services_text}>Улучшим любое
                предложение</p>
            </div>
          </div>
          <div className={cls.about_two_services_ptc}>
            <img className={cls.about_two_services_img} src={Ptc} alt="" />
            <div>
              <p className={cls.about_two_services_text}>Кредит 0,01%</p>
            </div>
          </div>
        </div>

        <div className={cls.about_two_foto}>
          <img className={cls.about_two_foto_img} src={One} alt="" />
          <img className={cls.about_two_foto_img} src={Two} alt="" />
          <img className={cls.about_two_foto_img} src={Tree} alt="" />
          <img className={cls.about_two_foto_img} src={Four} alt="" />
          <img className={cls.about_two_foto_img} src={Five} alt="" />
        </div>

      </div>
    </div>
  )
}
export default AvtoAboutTwo