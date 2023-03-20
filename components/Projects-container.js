import Btn from '@/components/Projects-btn';

export default function PrContainer({ src, alt, className }) {
    const addimgSrc = src ? `${src}` : 'placeholder.jpg';
    const addimgAlt = alt ? `${alt}` : 'Empty';
    const addclassName = className ? `${className}` : '';


    return (
        <section className={`${addclassName}`}>
            <div className="w-full group">
                <div className="relative overflow-hidden">
                    <img className="md:h-[300px] w-full object-fill md:object-cover" src={addimgSrc} alt={addimgAlt} />
                    <div className="absolute h-full w-full bg-gray-500/90 flex items-center justify-around -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Btn src='/eye.png' href='https://easy-bank-sand.vercel.app/'>Preview</Btn>
                        <Btn src='/github.png' href='https://github.com/btrx/FrontendMentor-EasyBank'>Github</Btn>
                    </div>
                </div>
            </div>
        </section>
    )
}
