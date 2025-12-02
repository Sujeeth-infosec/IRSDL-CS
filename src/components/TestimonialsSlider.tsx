import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import 'swiper/css/effect-coverflow'
import { testimonials } from '../data/testimonials'
import { Quote, Star } from 'lucide-react'

const TestimonialsSlider = () => {
  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Centered Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-6"
      >
        <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-3">Voices from India</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Trusted by mission-critical teams</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
          See what leading Indian enterprises say about our cybersecurity solutions
        </p>
        <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-sm text-blue-300">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="font-semibold">4.9/5</span>
          <span className="text-blue-400">average satisfaction</span>
        </div>
      </motion.div>

      {/* Testimonials Slider - Centered */}
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          loop
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          navigation
          className="testimonials-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.author} style={{ width: '600px' }}>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl hover:border-blue-500/50 transition-all">
                {/* Quote Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full p-4 shadow-lg shadow-blue-500/50">
                    <Quote className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="pt-8 text-center">
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 font-light italic">
                    "{item.message}"
                  </p>
                  
                  {/* Author Info - Centered */}
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="h-20 w-20 rounded-full object-cover border-4 border-blue-500/50 shadow-md"
                      loading="lazy"
                    />
                    <div className="text-center">
                      <p className="font-bold text-white text-lg mb-1">{item.author}</p>
                      <p className="text-gray-400 mb-1">
                        {item.role}, {item.company}
                      </p>
                      <p className="text-sm text-gray-500 uppercase tracking-wider">{item.city}, India</p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center justify-center gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Tags - Centered */}
                  <div className="flex flex-wrap justify-center gap-3 mt-8 pt-8 border-t border-slate-700/50">
                    <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 border border-blue-400/30 text-sm font-medium">
                      CERT-In aligned
                    </span>
                    <span className="px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-400/30 text-sm font-medium">
                      Mumbai SOC
                    </span>
                    <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 border border-blue-400/30 text-sm font-medium">
                      Rapid response
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .testimonials-swiper {
          padding: 40px 0 80px;
        }
        .testimonials-swiper .swiper-slide {
          opacity: 0.4;
          transition: opacity 0.3s;
        }
        .testimonials-swiper .swiper-slide-active {
          opacity: 1;
        }
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #3b82f6;
          background: rgba(30, 41, 59, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.3);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          margin-top: -24px;
        }
        .testimonials-swiper .swiper-button-next:hover,
        .testimonials-swiper .swiper-button-prev:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.5);
        }
        .testimonials-swiper .swiper-button-next:after,
        .testimonials-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        .testimonials-swiper .swiper-pagination {
          bottom: 20px;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          background: #475569;
          opacity: 1;
          width: 12px;
          height: 12px;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #3b82f6;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  )
}

export default TestimonialsSlider
