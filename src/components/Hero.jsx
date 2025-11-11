import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-red-600/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center pt-10">
        <div className="relative z-10 py-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Drive the city with style.
            <span className="block text-red-600">L&M CAR Rentals</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg text-gray-600 max-w-xl"
          >
            Premium vehicles. Flexible plans. Red-glow vibes. Book your ride in seconds and hit the road with confidence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#booking" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-red-600 text-white font-semibold shadow-lg shadow-red-600/30 hover:bg-red-700 transition">
              Book Now
            </a>
            <a href="#fleet" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-semibold hover:border-red-600 hover:text-red-600 transition">
              Explore Fleet
            </a>
          </motion.div>
        </div>

        <div className="relative h-[60vh] lg:h-[80vh]">
          <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60" />
        </div>
      </div>
    </section>
  );
}
