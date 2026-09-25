import React from 'react'

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <h2 className="text-2xl font-bold">
          Asosiy sahifa
        </h2>

        <div className="flex items-center gap-3">
          <input
            type="email"
            placeholder="Email kiriting"
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-300"
          />

          <input
            type="text"
            placeholder="Kod kiriting"
            className="w-36 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-300"
          />

          <button
            className="rounded-lg bg-white px-5 py-2 font-semibold text-blue-600 transition hover:bg-blue-50 active:scale-95"
          >
            Tasdiqlash
          </button>
        </div>

      </div>
      <div>
        <select name="" id="">
            <option value="qumariq">qumariq</option>
            <option value="mirzo ulugbek">mirzo ulugbek</option>
            <option value="sergili">sergili</option>
        </select>
      </div>
    </header>
  )
}

export default Header
