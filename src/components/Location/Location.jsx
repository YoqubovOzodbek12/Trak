

import LocationImg from '../../image/location.png'

import cls from './Location.module.css'

const Location = () => {
  return (
    <div className={cls.container}>
      <div className={cls.location}>
        <div className={cls.location_box}>

          <div className={cls.location_adress}>
            <p className={cls.location_adress_text}>Адрес</p>
            <p className={cls.location_adress_desc}>Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)</p>
          </div>

          <div className={cls.location_phone}>
            <p className={cls.location_phonw_text}>Телефон</p>
            <p className={cls.location_phone_number}>+7 (999) 999-99-99</p>
            <p className={cls.location_phone_desc}>Мы на связи</p>
          </div>

          <div className={cls.location_ish}>
            <p className={cls.location_ish_text}>Режим работы</p>
            <p className={cls.location_ish_desc}>Ежедневно</p>
            <p className={cls.location_ish_vaqt}>с 09:00 до 21:00</p>
          </div>

          <div className={cls.location_zvonok}>
            <button className={cls.location_zvonok_btn}>Заказать звонок</button>
          </div>

        </div>
      </div>
    </div >
  )
}
export default Location