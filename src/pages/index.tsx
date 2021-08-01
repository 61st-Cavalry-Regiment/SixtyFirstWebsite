import MImage from '../components/Image'

export default function Home() {
    return (
        <div className="container text-center text-primary font-medium mt-12">
            <h1 className="">Welcome to the 61st Cavalry Regiment (Arma 3)</h1>
            <h3 className="pt-4">
                Feel free to suport us on{' '}
                <a
                    className="underline"
                    href="https://www.patreon.com/61stcavreg"
                >
                    Patreon
                </a>
                .
            </h3>
            <p className="mt-20">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                aut voluptatibus expedita, sequi est vel in similique quas vero
                deleniti quibusdam pariatur impedit culpa, illum aliquam fugiat,
                maiores voluptatem quia.
            </p>
        </div>
    )
}
