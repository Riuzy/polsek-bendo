export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo / Judul */}
          <div className="text-2xl font-bold text-blue-700">Polsek Bendo</div>

          {/* Menu Utama */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>

            {/* Dropdown: Layanan */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition">Layanan ▼</button>
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md hidden group-hover:block z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Layanan 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Layanan 2</a>
              </div>
            </div>

            {/* Dropdown: Profil */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition">Profil ▼</button>
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md hidden group-hover:block z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sejarah</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Struktur</a>
              </div>
            </div>
          </nav>

          {/* Search */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Cari..."
              className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </header>

      {/* Carousel */}

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-12">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Tentang Kami</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis aliquet ligula sed congue. Nam sodales feugiat felis eget facilisis...
          </p>
        </div>

        {/* Info Kegiatan */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Info Kegiatan</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-200">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2 border">Song</th>
                  <th className="px-4 py-2 border">Artist</th>
                  <th className="px-4 py-2 border">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">Loremp</td>
                  <td className="px-4 py-2 border">Malcolm Lockyer</td>
                  <td className="px-4 py-2 border">1961</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">Witchy Woman</td>
                  <td className="px-4 py-2 border">The Eagles</td>
                  <td className="px-4 py-2 border">1972</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">Shining Star</td>
                  <td className="px-4 py-2 border">Earth, Wind, and Fire</td>
                  <td className="px-4 py-2 border">1975</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Layanan Kami */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">Layanan Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SKCK</h3>
            <p className="text-sm text-gray-700 mb-4">
              Layanan penerbitan Surat Keterangan Catatan Kepolisian (SKCK) secara cepat dan mudah.
            </p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Lihat Detail</a>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Laporan Kehilangan</h3>
            <p className="text-sm text-gray-700 mb-4">
              Melayani pelaporan kehilangan barang atau dokumen penting dengan prosedur yang jelas.
            </p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Lihat Detail</a>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pengaduan Masyarakat</h3>
            <p className="text-sm text-gray-700 mb-4">
              Sampaikan keluhan atau laporan terkait ketertiban masyarakat melalui layanan ini.
            </p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Lihat Detail</a>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Layanan SIM</h3>
            <p className="text-sm text-gray-700 mb-4">
              Informasi dan bantuan terkait perpanjangan serta pembuatan SIM baru.
            </p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Lihat Detail</a>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Surat Izin Keramaian</h3>
            <p className="text-sm text-gray-700 mb-4">
              Permohonan izin kegiatan masyarakat yang melibatkan keramaian atau hiburan.
            </p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Lihat Detail</a>
          </div>
        </div>
      </section>

    </>
  );
}
