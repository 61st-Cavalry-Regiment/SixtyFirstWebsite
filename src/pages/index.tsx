import { parseUrl } from '../components/Image'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="container text-center text-primary font-medium mt-12">
            <h1 className="">Welcome to the 61st Cavalry Regiment (Arma 3)</h1>
            <h2 className="pt-4">
                Feel free to suport us on{' '}
                <a
                    className="underline"
                    href="https://www.patreon.com/61stcavreg"
                >
                    Patreon
                </a>
                .
            </h2>
            <p className="my-20">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                aut voluptatibus expedita, sequi est vel in similique quas vero
                deleniti quibusdam pariatur impedit culpa, illum aliquam fugiat,
                maiores voluptatem quia.
            </p>
            <h2>Featured Photos</h2>
            <div className="grid grid-rows-2 xl:grid-rows-1 grid-cols-1 xl:grid-cols-2 gap-2">
                <div>
                    <Image
                        src={parseUrl('home/img_1.jpg')}
                        width={1920}
                        height={1080}
                        alt="img 1"
                    />
                </div>
                <div>
                    <Image
                        src={parseUrl('home/img_2.jpg')}
                        width={1920}
                        height={1080}
                        alt="img 2"
                    />
                </div>
            </div>
        </div>
    )
}
