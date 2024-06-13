import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


import cls from './Disclaimer.module.css'

const Disclaimer = () => {
  return (
    <div className={cls.container}>
      <div className={cls.disclaimer}>
        <h3 className={cls.disclaimer_title}>Дисклеймер <FontAwesomeIcon className={cls.disclaimer_icon} icon={faChevronUp} /></h3>
        <p className={cls.disclaimer_text}>
          TANK 300 за 3 799 000руб с учетом поддержек. Цена на модель TANK (ТЭНК) 300 в комплектации Adventure (Эдвенчер) с двигателем 2,0T 4WD, 2023 года производства, цвет автомобиля: белый, с учетом выгоды по трейд-ин 300 000 рублей. В трейд-ин принимаются автомобили с пробегом со сроком владения и регистрации (постановки на учет) в органах ГИБДД не менее 6 месяцев (в отношении автомобилей бренда TANK, Haval, Great Wall – 3 месяца) до сдачи автомобиля в трейд-ин. В качестве документов, подтверждающих срок владения сдаваемого в трейд-ин автомобиля, собственнику необходимо предоставить копию ПТС или СТС или карточку учета ТС из ГИБДД с печатью и подписью. Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ. Предложение ограничено, не является офертой и действует с 01.04.2024г. <br /> <br />
          TANK 500 за 5 349 000 руб с учетом поддержек. Цена на модель TANK (ТЭНК) 500 в комплектации Adventure (Эдвенчер) с двигателем 3,0T 4WD, 2023 года производства, цвет автомобиля: белый, с учетом прямой выгоды в 950 000 рублей. Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ. Предложение ограничено, не является офертой и действует с 01.04.2024г.
        </p>
        <span className={cls.disclaimer_line}></span>
      </div>

      <div className={cls.disclaimer_box}>
        <div className={cls.disclaimer_left}>
          <h4 className={cls.disclaimer_left_title}>АВТОРУСЬ TANK Лосиный Остров</h4>
          <p className={cls.disclaimer_left_text}>Официальный дилер</p>
          <p className={cls.disclaimer_left_desc}>Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)</p>

          <div>
            <p className={cls.disclaimer_left_diler}>Официальный дилер</p>
            <h4 className={cls.disclaimer_left_iin}>ООО А АВТОРУСЬ МЫТИЩИ | ОГРН - 1147746695161, ИНН - 7728881903</h4>
          </div>
        </div>

        <div className={cls.disclaimer_right}>
          <div className={cls.disclaimer_right_top}>

            <div className={cls.disclaimer_right_top_box}>
              <p className={cls.disclaimer_right_number}>+7 (999) 999-99-99</p>
              <p className={cls.disclaimer_right_text}>Мы на связи</p>
            </div>

            <div>
              <button className={cls.disclaimer_right_btn}>Заказать звонок</button>
            </div>

          </div>

          <div className={cls.disclaimer_right_bottom}>
            <div>
              <p className={cls.disclaimer_right_desc}>Записаться на сервис</p>
            </div>
            <div>
              <p className={cls.disclaimer_right_desc}>Тест-драйв</p>
            </div>
          </div>
        </div>
      </div>

      <span className={cls.disclaimer_line}></span>

    </div>
  )
}
export default Disclaimer