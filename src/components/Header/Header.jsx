
import cls from './Header.module.css'

const Header = () => {
  return (
    <div className={cls.header}>
      <div className={cls.header_top}>
        <p className={cls.header_text}><i style={{ paddingRight: '5px' }} class="fa-solid fa-location-dot"></i>Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)</p>
        <div className={cls.header_rigth}>
          <div className={cls.header_one}>
            <i style={{ color: '#FF7F50' }} class="fa-solid fa-gear"></i>
            <p className={cls.header_services}>Записаться на сервис</p>
          </div>
          <div className={cls.header_two}>
            <i style={{ color: '#FF7F50' }} class="fa-solid fa-gear"></i>
            <p className={cls.header_test}>Тест-драйв</p>
          </div>
        </div>
      </div>


      <hr className={cls.header_hr} />


      <div className={cls.header_bottom}>
        <div className={cls.header_bottom_left}>
          <p className={cls.header_bottom_text}>АВТОРУСЬ TANK</p>
          <p className={cls.header_bottom_diler}>Официальный дилер</p>
        </div>

        <div className={cls.header_bottom_rigth}>
          <div className={cls.header_bottom_rigth_box}>
            <p className={cls.header_bottom_number}>+7 (999) 999-99-99</p>
            <span className={cls.header_bottom_svyazi}>Мы на связи</span>
          </div>
          <div>
            <button className={cls.header_bottom_btn}>
              <i style={{ color: '#181818', paddingRight: '10px' }} class="fa-solid fa-phone-volume"></i>Заказать звонок</button>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Header