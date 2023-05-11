import floatShoes from '../assets/float-shoes.png'
import Button from './Button'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__content-cta">
            <h2>
              Find best shoes for you!
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore.
            </p>
            <Button buttonClass="primary" buttonLink="#" buttonText="SHOP NOW" />
          </div>
          <div className="hero__content-image">
            <img src={floatShoes} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero