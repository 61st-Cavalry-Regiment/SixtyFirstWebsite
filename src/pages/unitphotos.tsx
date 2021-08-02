import Head from 'next/head'
import { parseUrl } from '../components/Image'
import Image from 'next/image'

const PHOTOS = [
    'unit-photos/img_1.jpg',
    'unit-photos/img_2.jpg',
    'unit-photos/img_3.jpg',
    'unit-photos/img_4.jpg',
    'unit-photos/img_5.jpg',
]

function UnitPhotos() {
    return (
        <div className="container text-center text-primary mt-12">
            <Head>
                <link href="/bootstrap.css" rel="stylesheet" />
                <script
                    defer
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <h1>Unit Photos</h1>
            <div
                id="carouselExampleIndicators"
                className="carousel slide w-3/4 mx-auto pt-12"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image
                            src={parseUrl(PHOTOS[0])}
                            className="block w-full"
                            alt="..."
                            width={2000}
                            height={1128}
                        />
                    </div>
                    {PHOTOS.slice(1).map((photo) => (
                        <div key={photo} className="carousel-item">
                            <Image
                                src={parseUrl(photo)}
                                className="block w-full"
                                alt="..."
                                width={2000}
                                height={1128}
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default UnitPhotos
