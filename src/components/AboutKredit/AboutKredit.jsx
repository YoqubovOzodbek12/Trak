

import cls from './AboutKredit.module.css'

const AboutKredit = () => {
  return (
    <div className={cls.kredit}>
      <div className={cls.container}>
        <div className={cls.kredit_box}>
          <h3 className={cls.kredit_title}>Оставьте заявку на кредит</h3>
          <p className={cls.kredit_desc}>и получите одобрение за 1 день!</p>
          <div className={cls.kredit_wrapper}>
            <div className={cls.kredit_wrapper_left}>
              <p className={cls.kredit_line}>Телефон</p>
              <input className={cls.kredit_wrapper_inp} type="number" placeholder='+7 (___) ___-__-__' />
            </div>
            <div>
              <button className={cls.kredit_wrapper_btn}>Отправить заявку</button>
            </div>
          </div>
          <div className={cls.kredit_reaper}>
            <input className={cls.kredit_reaper_checkbox} type="checkbox" />
            <p className={cls.kredit_reaper_text}>Согласен на обработку персональных данных.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutKredit