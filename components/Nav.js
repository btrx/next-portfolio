import NavComp from "./Nav-components"

export default function Nav(){
    return(
        <div className='h-20 flex items-center'>
              <div className='flex-row font-sans text-2xl text-black-500 w-10/12'>
                <NavComp href='#' className='ml-24'>About Me</NavComp>
                <NavComp href='#' className='mx-10'>Projects</NavComp>
                <NavComp href='#'>Contacts</NavComp>
              </div>
              <div className='w-2/12 lg:mr-10'>
                <a href='#' className='py-3 px-10 border-2 rounded-full border-black-500'>Say Hi!</a>
              </div>
        </div>
    )
}