import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 sticky top-0 z-30 border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 select-none">
          <div className="h-8 w-8 rounded-md bg-red-600 text-white grid place-items-center font-black">L</div>
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-gray-900">L&M</span> <span className="text-red-600">CAR</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#fleet" className="text-gray-700 hover:text-red-600 transition">Fleet</a>
          <a href="#pricing" className="text-gray-700 hover:text-red-600 transition">Pricing</a>
          <a href="#booking" className="text-gray-700 hover:text-red-600 transition">Book</a>
          <a href="#contact" className="text-gray-700 hover:text-red-600 transition">Contact</a>
        </div>
        <button onClick={() => setOpen(v=>!v)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t px-4 pb-4">
          <div className="flex flex-col gap-3 pt-3">
            <a onClick={()=>setOpen(false)} href="#fleet" className="text-gray-700 hover:text-red-600 transition">Fleet</a>
            <a onClick={()=>setOpen(false)} href="#pricing" className="text-gray-700 hover:text-red-600 transition">Pricing</a>
            <a onClick={()=>setOpen(false)} href="#booking" className="text-gray-700 hover:text-red-600 transition">Book</a>
            <a onClick={()=>setOpen(false)} href="#contact" className="text-gray-700 hover:text-red-600 transition">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
