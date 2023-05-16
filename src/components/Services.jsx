import miniSeal1 from '../assets/mini-seal-1.svg';
import miniSeal2 from '../assets/mini-seal-2.svg';
import miniSeal3 from '../assets/mini-seal-3.svg';
import miniSeal4 from '../assets/mini-seal-4.svg';
import miniSeal5 from '../assets/mini-seal-5.svg';

const Services = () => {
  return (
    <section id='services' className="services">
      <div className="container">
        <div className="services__content">
          <h2 className="section-title">
            Nossos Serviços
          </h2>
          <div className="services__content-intern">
            <div className="item">
              <img src={miniSeal1} alt="" />
              <h4>Envio Rápido</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Asperiores possimus 
                voluptatem autem et doloribus. 
                Nihil magnam, iure doloribus eum 
              </p>
            </div>
            <div className="item">
              <img src={miniSeal2} alt="" />
              <h4>100% de Garantia</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Asperiores possimus 
                voluptatem autem et doloribus. 
                Nihil magnam, iure doloribus eum 
              </p>
            </div>
            <div className="item">
              <img src={miniSeal3} alt="" />
              <h4>Atendimento Rápido</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Asperiores possimus 
                voluptatem autem et doloribus. 
                Nihil magnam, iure doloribus eum 
              </p>
            </div>
            <div className="item">
              <img src={miniSeal4} alt="" />
              <h4>Alta Qualidade</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Asperiores possimus 
                voluptatem autem et doloribus. 
                Nihil magnam, iure doloribus eum 
              </p>
            </div>
            <div className="item">
              <img src={miniSeal5} alt="" />
              <h4>Perfeito para Você</h4>
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