import PrContainer from "@/components/Projects-container";


export default function Projects() {
    return (
        <>
            <div className=' md:flex lg:flex mx-5 items-center my-5'>
                <PrContainer src='Project-EB.png' className='mx-5 md:ml-5' />
                <PrContainer src='' className='mx-5 my-5 md:my-0' />
                <PrContainer src='' className='mx-5 md:mr-5' />
            </div>
        </>
    )
}