/* eslint-disable no-unused-vars */
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'


const Banner = () => {
  return (
    <div className=''>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full h-[600px] rounded-lg" />
    <div className="absolute rounded-lg flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
     <div className='space-y-2 pl-20'>
      <h1 className='text-6xl font-bold text-white'>Affordable Price <br /> For Car Service</h1>
      <p className='text-white'>Lorem ipsum, dolor sit amet consectetur  adipisicing elit. <br />Itaque recusandae porro, reprehenderit quos quis fugit maiores <br /> praesentium nisi ea eaque?</p>
      <div className='flex gap-5'>
      <button className="btn btn-active btn-secondary">Discover More</button>
      <button className="btn btn-outline btn-warning">Latest Project</button>
      </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={img2} className="w-full h-[600px] rounded-lg" />
    <div className="absolute rounded-lg flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
     <div className='space-y-2 pl-20'>
      <h1 className='text-6xl font-bold text-white'>Affordable Price <br /> For Car Service</h1>
      <p className='text-white'>Lorem ipsum, dolor sit amet consectetur  adipisicing elit. <br />Itaque recusandae porro, reprehenderit quos quis fugit maiores <br /> praesentium nisi ea eaque?</p>
      <div className='flex gap-5'>
      <button className="btn btn-active btn-secondary">Discover More</button>
      <button className="btn btn-outline btn-warning">Latest Project</button>
      </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={img3} className="w-full h-[600px] rounded-lg" />
    <div className="absolute rounded-lg flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
     <div className='space-y-2 pl-20'>
      <h1 className='text-6xl font-bold text-white'>Affordable Price <br /> For Car Service</h1>
      <p className='text-white'>Lorem ipsum, dolor sit amet consectetur  adipisicing elit. <br />Itaque recusandae porro, reprehenderit quos quis fugit maiores <br /> praesentium nisi ea eaque?</p>
      <div className='flex gap-5'>
      <button className="btn btn-active btn-secondary">Discover More</button>
      <button className="btn btn-outline btn-warning">Latest Project</button>
      </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={img4} className="w-full h-[600px] rounded-lg" />
    <div className="absolute rounded-lg flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
     <div className='space-y-2 pl-20'>
      <h1 className='text-6xl font-bold text-white'>Affordable Price <br /> For Car Service</h1>
      <p className='text-white'>Lorem ipsum, dolor sit amet consectetur  adipisicing elit. <br />Itaque recusandae porro, reprehenderit quos quis fugit maiores <br /> praesentium nisi ea eaque?</p>
      <div className='flex gap-5'>
      <button className="btn btn-active btn-secondary">Discover More</button>
      <button className="btn btn-outline btn-warning">Latest Project</button>
      </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner