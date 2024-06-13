import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Diler from '../../image/award-03.svg';
import OneCar from '../../image/image 286.png';
import TwoCar from '../../image/image 286 (1).png';

import cls from './Validity.module.css'

const Validity = () => {

  const kun = 85;
  const soat = 45;
  const minut = 20;
  const sekunt = 83;

  return (
    <div className={cls.container}>
      <div className={cls.validity}>

        <div className={cls.validity_left}>
          <p className={cls.alidity_left_text}>Срок действия <br /> спецпредложения:</p>
        </div>

        <div className={cls.alidity_middle}>

          <div className={cls.alidity_alidity_middle_box}>
            <CircularProgressbarWithChildren strokeWidth={4} styles={buildStyles({ pathColor: '#FF9549', trailColor: '#596363' })} className={cls.alidity_middle_br} value={kun} >
              <p className={cls.alidity_middle_number}>3</p>
              <p className={cls.alidity_middle_text}>дня</p>
            </CircularProgressbarWithChildren>
          </div>
          <span className={cls.alidity_middle_wrapper}>
            <div className={cls.alidity_middle_line}></div>
            <div className={cls.alidity_middle_line}></div>
            <div></div>
          </span>

          <div className={cls.alidity_alidity_middle_box}>
            <CircularProgressbarWithChildren strokeWidth={4} styles={buildStyles({ pathColor: '#FF9549', trailColor: '#596363' })} className={cls.alidity_middle_br} value={soat} >
              <p className={cls.alidity_middle_number}>06</p>
              <p className={cls.alidity_middle_text}>часов</p>
            </CircularProgressbarWithChildren>
          </div>
          <span className={cls.alidity_middle_wrapper}>
            <div className={cls.alidity_middle_line}></div>
            <div className={cls.alidity_middle_line}></div>
            <div></div>
          </span>
          <div className={cls.alidity_alidity_middle_box}>
            <CircularProgressbarWithChildren strokeWidth={4} styles={buildStyles({ pathColor: '#FF9549', trailColor: '#596363' })} className={cls.alidity_middle_br} value={minut} >
              <p className={cls.alidity_middle_number}>14</p>
              <p className={cls.alidity_middle_text}>минут</p>
            </CircularProgressbarWithChildren>
          </div>
          <span className={cls.alidity_middle_wrapper}>
            <div className={cls.alidity_middle_line}></div>
            <div className={cls.alidity_middle_line}></div>
            <div></div>
          </span>
          <div className={cls.alidity_alidity_middle_box}>
            <CircularProgressbarWithChildren strokeWidth={4} styles={buildStyles({ pathColor: '#FF9549', trailColor: '#596363' })} className={cls.alidity_middle_br} value={sekunt} >
              <p className={cls.alidity_middle_number}>55</p>
              <p className={cls.alidity_middle_text}>секунд</p>
            </CircularProgressbarWithChildren>
          </div>
        </div>

        <div className={cls.alidity_right}>
          <button className={cls.alidity_right_btn}>Узнать цену с выгодами <i style={{ paddingLeft: '10px' }} class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>

      <div className={cls.services}>

        <div className={cls.services_dealer}>
          <div className={cls.services_dealer_left}>
            <img className={cls.services_dealer_img} src={Diler} alt="" />
          </div>
          <div className={cls.services_right}>
            <p className={cls.services_title}>Официальный дилер</p>
            <p className={cls.services_text}>Гарантируем высокое качество обслуживания.</p>
          </div>
        </div>

        <div className={cls.services_dealer}>
          <div className={cls.services_dealer_left}>
            <img className={cls.services_dealer_img} src={Diler} alt="" />
          </div>
          <div className={cls.services_right}>
            <p className={cls.services_title}>Официальный дилер</p>
            <p className={cls.services_text}>Гарантируем высокое качество обслуживания.</p>
          </div>
        </div>

        <div className={cls.services_dealer}>
          <div className={cls.services_dealer_left}>
            <img className={cls.services_dealer_img} src={Diler} alt="" />
          </div>
          <div className={cls.services_right}>
            <p className={cls.services_title}>Официальный дилер</p>
            <p className={cls.services_text}>Гарантируем высокое качество обслуживания.</p>
          </div>
        </div>

      </div>

      <h4 className={cls.additional}>ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ ДОПОЛНИТЕЛЬНУЮ ВЫГОДУ 100 000 ₽</h4>

      <div className={cls.additional_box}>
        <div className={cls.additional_box_one}>
          <img className={cls.additional_img} src={OneCar} alt="" />
          <p className={cls.additional_desc}>TANK 300</p>
        </div>
        <div className={cls.additional_box_one}>
          <img className={cls.additional_img} src={TwoCar} alt="" />
          <p className={cls.additional_desc}>TANK 300</p>
        </div>
      </div>
    </div >
  )
}
export default Validity