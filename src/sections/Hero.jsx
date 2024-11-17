import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our summer collection</p>
        <h1>
          <span>The new arrival</span>
          <br />
          <span>Nike</span>shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
      </div>
    </section>
  )
}

export default Hero
