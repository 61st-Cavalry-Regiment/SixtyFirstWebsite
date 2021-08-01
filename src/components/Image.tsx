/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from 'next/image'

interface IProps {
    src: string
}

const loader = (src: string) => {
    return `https://${process.env.NEXT_PUBLIC_CDN}/${src}`
}

function MImage(props: any) {
    let src = loader(props.src)
    let { src: s, ...p } = props
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} {...p} />
}

export default MImage
export type { IProps }
