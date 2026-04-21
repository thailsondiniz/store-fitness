import { useState, useEffect } from 'react'

const slides = [
  'https://images.pexels.com/photos/36433441/pexels-photo-36433441.jpeg',
  'https://images.pexels.com/photos/8454933/pexels-photo-8454933.jpeg',
  'https://images.pexels.com/photos/3763869/pexels-photo-3763869.jpeg',
  'https://images.pexels.com/photos/7862955/pexels-photo-7862955.jpeg'
]

const textSlides = [
    {title: 'Supere seus limites todos os dias', description: 'Roupas e acessórios pensados para acompanhar sua evolução dentro e fora do treino.'},
    {title: 'Alta performance começa no que você veste', description: 'Tecnologia, conforto e estilo para você ir além em cada movimento.'},
    {title: 'Vista sua melhor versão', description: 'Looks fitness que combinam atitude, conforto e personalidade.'},
    {title: 'Pronto para o próximo nível?', description: 'Descubra nossa coleção e transforme seu treino com mais estilo e confiança.'}
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden md:h-130 lg:h-160 xl:h-200 text-white">
      
      {slides.map((img, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${img})` }}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="relative z-10 flex flex-col items-start justify-center h-full p-8">
        <h1 className="text-4xl mt-8 lg:text-4xl lg:w-140 xl:text-6xl xl:w-200">{textSlides[currentSlide].title}</h1>

        <p className="mt-4 md:w-3xl max-w-lg text-lg font-light xl:text-2xl xl:w-200">
          {textSlides[currentSlide].description}
        </p>

        <button className="mt-6 px-6 py-2 border border-white rounded hover:bg-white hover:text-black cursor-pointer">
          Compre Agora
        </button>
      </div>

      {/* <div className="absolute bottom-10 left-10 z-10"> */}
      <div className='flex flex-col items-center absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10'>
        <h3>{currentSlide + 1} de {slides.length}</h3>
        <div className="flex space-x-2 mt-2">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-1 bg-white rounded-full cursor-pointer ${
                index === currentSlide ? '' : 'opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero