import { About, Footer, Header, Hero, Ratings, Products, Services, FloatingButton, FAQ } from "./components"

function App() {
  const questions = [
    {
      id: 1,
      question: 'Posso experimentar os calçados antes de comprar? ',
      answer: 'SIM! Nossa loja é local, nossa sede é em Londrina, sua experiência será como se comprasse em uma loja física, nosso diferencial é levar nossos produtos até o conforto da sua casa ou trabalho.',
    },
      {
      id: 2,
      question: 'Posso ter problemas com a entrega? Como atrasos ou produto danificado?',
      answer: 'Garantimos a entrega imediata do produto, em até 24 horas, levamos até você sem compromisso, nosso frete é grátis para Londrina e Cambé, demais cidades da região à combinar.',
    },
      {
      id: 3,
      question: 'Posso provar os calçados na entrega? Se não gostar posso devolver?',
      answer: 'Nosso diferencial é levar os produtos até nossos clientes, levamos nossas bags (sacolas) para você provar com tranquilidade.',
    },
        {
      id: 4,
      question: 'Se eu tiver problemas com o calçados, posso entrar em contato?',
      answer: 'SIM! Problemas de fabricação, são levados até nossos fornecedores, dependendo do caso a ser diagnosticado, pode haver substituição, conserto o devolução do dinheiro.',
    },
    {
      id: 5,
      question: 'Inconsistência de tamanho ou dificuldade de escolher tamanhos?',
      answer: 'Como levamos nos produtos até você, nada impede de solicitar um tamanho menor ou maior para provar, dependendo claro do nosso estoque.'
    },
    {
      id: 6,
      question: 'O preço baixo é promocional ou pode vir a aumentar?',
      answer: 'Como não temos loja física, conseguimos além de um atendimento personalizado e praticar preços mais baixos, com facilidade de pagamento via pix, débito e crédito (em até4x sem juros).'
    },
    
  ]
  return (
    <>
      <Header />
      <Hero />
      <Ratings />
      <Products />
      <About />
      {/* <Stories /> */}
      <FAQ data={questions}/>
      <Services />
      <Footer />
      <FloatingButton />
    </>
  )
}

export default App
