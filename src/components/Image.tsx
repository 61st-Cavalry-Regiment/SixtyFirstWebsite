/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from 'next/image'

interface IProps {
    src: string
    width?: number
    quality?: number
}

const loader = ({ src, width, quality }: IProps) => {
    return `https://${process.env.NEXT_PUBLIC_CDN}/${src}`
}

const parseUrl = (src: string): string => {
    return `https://${process.env.NEXT_PUBLIC_CDN}/${src}`
}

function MImage(props: any) {
    let src = loader({ src: props.src })
    let { src: s, ...p } = props
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} {...p} />
}

function NImage(props: JSX.IntrinsicAttributes & ImageProps) {
    return <Image loader={loader} {...props} />
}

export default NImage
export { MImage, parseUrl }
export type { IProps }
