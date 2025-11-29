import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { testimonials } from '../data/testimonials'
import { Quote, Star } from 'lucide-react'

const TestimonialsSlider = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Centered Header Section */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Voices from India</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Trusted by mission-critical teams</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
          See what leading Indian enterprises say about our cybersecurity solutions
        </p>
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 text-sm text-blue-700">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="font-semibold">4.9/5</span>
          <span className="text-blue-600">average satisfaction</span>
        </div>
      </div>

      {/* Testimonials Slider - Centered */}
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          loop
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          navigation
          spaceBetween={40}
          slidesPerView={1}
          className="testimonials-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.author}>
              <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all">
                {/* Quote Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="bg-blue-600 rounded-full p-4 shadow-lg">
                    <Quote className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="pt-8 text-center">
                  <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 font-light italic">
                    "{item.message}"
                  </p>
                  
                  {/* Author Info - Centered */}
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="h-20 w-20 rounded-full object-cover border-4 border-blue-100 shadow-md"
                      loading="lazy"
                    />
                    <div className="text-center">
                      <p className="font-bold text-slate-900 text-lg mb-1">{item.author}</p>
                      <p className="text-slate-600 mb-1">
                        {item.role}, {item.company}
                      </p>
                      <p className="text-sm text-slate-500 uppercase tracking-wider">{item.city}, India</p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center justify-center gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Tags - Centered */}
                  <div className="flex flex-wrap justify-center gap-3 mt-8 pt-8 border-t border-slate-100">
                    <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-sm font-medium">
                      CERT-In aligned
                    </span>
                    <span className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-sm font-medium">
                      Mumbai SOC
                    </span>
                    <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-sm font-medium">
                      Rapid response
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding-bottom: 60px;
        }
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #2563eb;
          background: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          margin-top: -24px;
        }
        .testimonials-swiper .swiper-button-next:after,
        .testimonials-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        .testimonials-swiper .swiper-pagination {
          bottom: 0;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
          width: 12px;
          height: 12px;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #2563eb;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  )
}

export default TestimonialsSlider
