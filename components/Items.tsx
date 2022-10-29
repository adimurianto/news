const allnews = [
    {
      id: 1,
      name: 'Mencari Raja Sabetan',
      href: '#',
      imageSrc: 'https://akcdn.detik.net.id/visual/2022/10/27/cover-cergam-interaktif-mencari-raja-sabetan-pakai-ini_169.jpeg',
      imageAlt: "Mencari Raja Sabetan"
    },
    {
      id: 1,
      name: 'Mencari Raja Sabetan',
      href: '#',
      imageSrc: 'https://akcdn.detik.net.id/visual/2022/10/27/cover-cergam-interaktif-mencari-raja-sabetan-pakai-ini_169.jpeg',
      imageAlt: "Mencari Raja Sabetan"
    },
    {
      id: 1,
      name: 'Mencari Raja Sabetan',
      href: '#',
      imageSrc: 'https://akcdn.detik.net.id/visual/2022/10/27/cover-cergam-interaktif-mencari-raja-sabetan-pakai-ini_169.jpeg',
      imageAlt: "Mencari Raja Sabetan"
    },
    {
      id: 1,
      name: 'Mencari Raja Sabetan',
      href: '#',
      imageSrc: 'https://akcdn.detik.net.id/visual/2022/10/27/cover-cergam-interaktif-mencari-raja-sabetan-pakai-ini_169.jpeg',
      imageAlt: "Mencari Raja Sabetan"
    },
    {
      id: 1,
      name: 'Mencari Raja Sabetan',
      href: '#',
      imageSrc: 'https://akcdn.detik.net.id/visual/2022/10/27/cover-cergam-interaktif-mencari-raja-sabetan-pakai-ini_169.jpeg',
      imageAlt: "Mencari Raja Sabetan"
    },
  ]
  
  export default function Items() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Berita Terbaru</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {allnews.map((news) => (
              <div key={news.id} className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none">
                  <img
                    src={news.imageSrc}
                    alt={news.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between w-full">
                  <div className="text-center w-full">
                    <h3 className="text-sm text-gray-700 text-center w-full">
                      <a href={news.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {news.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  