import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import { useState } from 'react';

function App() {
  const [toast, setToast] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Fleet />

      {/* Booking section */}
      <section id="booking" className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Book your ride</h2>
          <p className="text-gray-600 mb-8">Fill out the form and we’ll reach out to confirm availability.</p>

          <BookingForm onBooked={(msg)=>setToast(msg)} />
        </div>
      </section>

      {/* Simple footer */}
      <footer id="contact" className="border-t py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600">© {new Date().getFullYear()} L&M CAR. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-red-600">Terms</a>
            <a href="#" className="hover:text-red-600">Privacy</a>
            <a href="mailto:hello@lmcar.com" className="hover:text-red-600">hello@lmcar.com</a>
          </div>
        </div>
      </footer>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="rounded-lg bg-red-600 text-white px-4 py-3 shadow-lg">
            {toast}
          </div>
        </div>
      )}
    </div>
  )
}

function BookingForm({ onBooked }) {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    car_type: 'Urban Sport',
    pickup_date: '',
    return_date: '',
    pickup_location: 'City Center',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${backend}/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.detail || 'Booking failed');
      onBooked?.('Booking received! We will confirm shortly.');
      setForm({ full_name:'', email:'', phone:'', car_type:'Urban Sport', pickup_date:'', return_date:'', pickup_location:'City Center', notes:'' });
    } catch (err) {
      onBooked?.(String(err.message || err));
    } finally {
      setLoading(false);
      setTimeout(()=>onBooked?.(null), 3500);
    }
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Full name</label>
        <input value={form.full_name} onChange={e=>setForm({...form, full_name:e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Car</label>
        <select value={form.car_type} onChange={e=>setForm({...form, car_type:e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600">
          <option>Urban Sport</option>
          <option>Executive Sedan</option>
          <option>Family SUV</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Pickup Location</label>
        <input value={form.pickup_location} onChange={e=>setForm({...form, pickup_location:e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Pickup Date</label>
        <input type="date" value={form.pickup_date} onChange={e=>setForm({...form, pickup_date:e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Return Date</label>
        <input type="date" value={form.return_date} onChange={e=>setForm({...form, return_date:e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600" />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Notes</label>
        <textarea rows={4} value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600" />
      </div>
      <div className="sm:col-span-2">
        <button disabled={loading} className="w-full rounded-md bg-red-600 text-white py-3 font-semibold hover:bg-red-700 disabled:opacity-60">
          {loading ? 'Booking...' : 'Submit Booking'}
        </button>
      </div>
    </form>
  )
}

export default App
