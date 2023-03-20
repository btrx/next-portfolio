import Image from 'next/image'

export default function Icons({ src, width, height, alt, className }) {
    const addClassName = className ? `${className}` : ''

    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={`${addClassName}`}
        />
    )
}