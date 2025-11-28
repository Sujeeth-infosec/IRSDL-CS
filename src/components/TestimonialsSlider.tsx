import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { testimonials } from '../data/testimonials'
import { Quote } from 'lucide-react'

const TestimonialsSlider = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-panel/80 p-8 lg:p-10 shadow-panel">
      <div className="absolute -top-32 -right-16 w-96 h-96 bg-gradient-to-tr from-primary/30 to-accent/40 blur-3xl opacity-70" />
      <div className="relative flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-neon">Voices from India</p>
          <h3 className="text-3xl font-bold text-white">Trusted by mission-critical teams</h3>
        </div>
        <div className="flex items-center gap-3 bg-midnight/60 border border-white/5 rounded-2xl px-4 py-2 text-sm text-slate-200">
          <Quote className="h-5 w-5 text-primary" />
          4.9/5 avg. satisfaction
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 6500 }}
        loop
        pagination={{ clickable: true }}
        navigation
        spaceBetween={32}
        slidesPerView={1}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.author}>
            <div className="relative rounded-3xl border border-white/5 bg-gradient-to-br from-midnight via-panel to-midnight p-8 lg:p-10 shadow-2xl min-h-[260px] flex flex-col gap-6">
              <Quote className="absolute -top-4 -left-3 h-10 w-10 text-primary/30" />
              <p className="text-lg text-slate-100 leading-relaxed">“{item.message}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="h-14 w-14 rounded-full object-cover border border-white/10"
                  loading="lazy"
                />
                <div className="flex-1">
                  <p className="font-semibold text-white">{item.author}</p>
                  <p className="text-sm text-slate-300">
                    {item.role}, {item.company}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{item.city}, India</p>
                </div>
                <div className="hidden sm:flex flex-col items-end text-right text-xs text-slate-400">
                  <span className="text-slate-200 font-semibold">Live coverage</span>
                  <span>Uptime 99.995%</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-slate-200">
                <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40">CERT-In aligned</span>
                <span className="px-3 py-1 rounded-full bg-neon/10 border border-neon/30">Mumbai SOC</span>
                <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/40">Rapid response</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialsSlider

