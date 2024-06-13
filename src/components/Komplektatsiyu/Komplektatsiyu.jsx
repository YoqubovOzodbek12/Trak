

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Car from '../Car/Car';
import CarPriz from '../../image/prizcar.png'

import cls from './Komplektatsiyu.module.css'

const Komplektatsiyu = () => {
  return (
    <div className={cls.container}>
      <h3 className={cls.komplektatsiyu_title}>ПОДБЕРИТЕ КОМПЛЕКТАЦИЮ</h3>

      <div className={cls.komplektatsiyu_inps}>
        <div className={cls.komplektatsiyu_box}>
          <span className={cls.komplektatsiyu_text}>Model</span> <br />
          <input className={cls.komplektatsiyu_inp} type="text" />
          <FontAwesomeIcon icon={faAngleDown} className={cls.komplektatsiyu_icon} />
        </div>

        <div className={cls.komplektatsiyu_box}>
          <span className={cls.komplektatsiyu_text}>Комплектация</span> <br />
          <input className={cls.komplektatsiyu_inp} type="text" />
          <FontAwesomeIcon icon={faAngleDown} className={cls.komplektatsiyu_icon} />
        </div>

        <div className={cls.komplektatsiyu_box}>
          <span className={cls.komplektatsiyu_text}>Двигатель</span> <br />
          <input className={cls.komplektatsiyu_inp} type="text" />
          <FontAwesomeIcon icon={faAngleDown} className={cls.komplektatsiyu_icon} />
        </div>
      </div>

      <Car />
      <Car />
      <Car />
      <div className={cls.komplektatsiyu_btns}>
        <button className={cls.komplektatsiyu_btn}>Загрузить еще</button>
      </div>


      <div className={cls.trade}>
        <img className={cls.trade_img} src={CarPriz} alt="" />

        <div className={cls.trade_right}>
          <h3 className={cls.trade_title}>ОБМЕН ПО TRADE-IN НА ВЫГОДНЫХ УСЛОВИЯХ</h3>
          <button className={cls.trade_btn}>Отправить заявку</button>
        </div>
      </div>

    </div>
  )
}
export default Komplektatsiyu