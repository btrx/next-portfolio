import Image from "next/image";

export default function Btn({ src, href, children }) {
    const addimgSrc = src ? `${src}` : '';

    return (
        <a href={href} className="text-black py-2 px-5 flex">
            <Image
                src={addimgSrc}
                alt=''
                width={40}
                height={20}
            />
            <p className="m-2">{children}</p>
        </a>
    )
}