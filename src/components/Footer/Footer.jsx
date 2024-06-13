

import cls from './Footer.module.css'

const Footer = () => {
  return (
    <div className={cls.container}>
      <div className={cls.footer}>
        <p className={cls.footer_text}>© 2024, АВТОРУСЬ ТАНК</p>
        <div className={cls.footer_right}>
          <p className={cls.footer_right_text}>Правовая информация</p>
          <p className={cls.footer_right_text}>Условия акции</p>
        </div>
      </div>
    </div>
  )
}
export default Footer