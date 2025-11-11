import { motion } from 'framer-motion';

const cars = [
  { name: 'Urban Sport', price: 89, img: 'https://images.unsplash.com/photo-1655642662218-3f860f05a4be?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Executive Sedan', price: 109, img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Family SUV', price: 129, img: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1400&auto=format&fit=crop' },
];

export default function Fleet() {
  return (
    <section id="fleet" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Featured Fleet</h2>
          <p className="text-gray-600">Daily rates. Insurance included.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={c.img} alt={c.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">{c.name}</h3>
                  <span className="text-red-600 font-semibold">${c.price}/day</span>
                </div>
                <button className="mt-4 w-full rounded-md bg-red-600 text-white py-2 font-semibold hover:bg-red-700 transition">Reserve</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
