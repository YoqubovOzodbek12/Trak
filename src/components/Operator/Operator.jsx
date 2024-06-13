

import OperatorImg from '../../image/operator.png'

import cls from './Operator.module.css'

const Operator = () => {
  return (
    <div className={cls.container}>
      <div className={cls.operator}>
        <div className={cls.operator_left}>
          <h3 className={cls.operator_left_title}>Индивидуальное предложение для корпоративных клиентов</h3>
          <button className={cls.operator_left_btn}>Отправить заявку</button>
        </div>

        <div className={cls.operator_right}>
          <img className={cls.operator_right_img} src={OperatorImg} alt="" />
          <div className={cls.operator_right_box}>
            <h4 className={cls.operator_right_title}>Татьяна Санникова</h4>
            <p className={cls.operator_right_desc}>Отдел корпоративных продаж АВТОРУСЬ</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Operator