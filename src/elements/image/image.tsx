interface ImageProps {
  src: string
  alt?: string
}

const Image = ({ src, alt = '' }: ImageProps) => <img src={src} alt={alt} />

export default Image
