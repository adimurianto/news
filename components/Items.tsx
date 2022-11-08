import Image from "next/image";
import { useState } from "react";
import { Item } from "../types/News";
import PopupDetail from "./PopupDetail";

type ItemProps = {
  dataItems: any;
  category: string;
}

interface detailProps {
  details: Item
}

export default function Items({dataItems, category}: ItemProps, {details}: detailProps) {
  const categoryName = category[0].toUpperCase() + category.substring(1);

  const detail = {
    item: details,
    date: new Date(),
    status: false
  }

  const [detailNews, setDetailNews] = useState(detail);

  const getDetail = (item: any) => {
    const detailSet = {
      item: item,
      date: new Date(),
      status: true
    }
    setDetailNews(detailSet);
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Berita Terbaru {categoryName}</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            dataItems ?
              dataItems.slice(0, 20).map((news:any) => (
                <div key={news.id} className="group relative" onClick={() => getDetail(news)}>
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none">
                    <Image 
                      alt={news.title}
                      src={news.image.small}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="mt-4 flex justify-between w-full">
                    <div className="text-center w-full">
                      <h3 className="text-sm text-gray-700 text-center w-full">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {news.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))
            :
            <h1 className="text-black text-center">No Data.</h1>
          }
        </div>
      </div>

      <PopupDetail status={detailNews.status} detail={detailNews.item} time={detailNews.date}/>
    </div>
  )
}
  