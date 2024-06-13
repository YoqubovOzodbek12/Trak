
import CarImg from '../../image/car.png'

import cls from './Car.module.css'

const Car = () => {
  return (
    <div className={cls.car}>
      <div className={cls.car_left}>
        <img className={cls.car_left_img} src={CarImg} alt="" />
      </div>

      <div className={cls.middle}>

        <div className={cls.middle_wrapper}>
          <div>
            <h4 className={cls.middle_title}>TANK 300</h4>
            <p className={cls.middle_text}>2.0 л. Бензин, Полный, Автоматическая</p>
            <p className={cls.middle_price}>3 649 000 ₽</p>
          </div>

          <div className={cls.middle_btns}>
            <button className={cls.middle_btn_active}>Получить предложение</button>
            <button className={cls.middle_btn}>Тест-драйв</button>
          </div>
        </div>

        <div className={cls.middle_box}>
          <p className={cls.middle_box_text}>Выгода по Trade-in до 450 000 ₽ </p>
          <p className={cls.middle_box_text}>Керамическое покрытие в подарок!</p>
        </div>
      </div>
    </div>
  )
}
export default Car