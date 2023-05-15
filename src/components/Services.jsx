import miniSeal from '../assets/mini-seal.svg';

const Services = () => {
  return (
    <section id='services' className="services">
      <div className="container">
        <div className="services__content">
          <h2 className="section-title">
            Our Services
          </h2>
          <div className="services__content-intern">
            <div className="item">
              <img src={miniSeal} alt="" />
              <h4>Fast Delivery</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Asperiores possimus 
                voluptatem autem et doloribus. 
                Nihil magnam, iure doloribus eum 
              </p>
            </div>
            <div className="item">
              <img src={miniSeal} alt="" />
              <h4>100% Warranty</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Asperiores possimus 
                voluptatem autem et doloribus. 
                Nihil magnam, iure doloribus eum 
              </p>
            </div>
            <div className="item">
              <img src={miniSeal} alt="" />
              <h4>24/7 Support</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Asperiores possimus 
                voluptatem autem et doloribus. 
                Nihil magnam, iure doloribus eum 
              </p>
            </div>
            <div className="item">
              <img src={miniSeal} alt="" />
              <h4>Best Quality</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Asperiores possimus 
                voluptatem autem et doloribus. 
                Nihil magnam, iure doloribus eum 
              </p>
            </div>
            <div className="item">
              <img src={miniSeal} alt="" />
              <h4>Suitable For All</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Asperiores possimus 
                voluptatem autem et doloribus. 
                Nihil magnam, iure doloribus eum 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services