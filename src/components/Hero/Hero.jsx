
import cls from './Hero.module.css'

const Hero = () => {
  return (
    <div className={cls.hero}>
      <div className={cls.container}>
        <div className={cls.hero_box}>
          <p className={cls.hero_text}>Улучшим любые условия</p>
          <h3 className={cls.hero_title}>TANK 500</h3>
          <p className={cls.hero_text}>Осталось всего 5 автомобилей!</p>
          <button className={cls.hero_btn}>Получить предложение <i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  )
}
export default Hero