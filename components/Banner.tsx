export default function Banner() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src="/img_banner/banner_two.png"
                        className="block w-full"
                        alt="Wild Landscape"
                    />
                </div>
            </div>
        </div>
    )
}