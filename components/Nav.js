import NavComp from "./Nav-components"

export default function Nav() {
  return (
    <div className='lg:h-20 flex items-center justify-between my-2'>
      <div className='font-sans font-medium text-sm xl:text-2xl text-black-500 w-10/12'>
        <NavComp href='#' className='ml-4 lg:ml-24'>About Me</NavComp>
        <NavComp href='#' className='mx-2 lg:mx-10'>Projects</NavComp>
        <NavComp href='#'>Contacts</NavComp>
      </div>
      <div className='w-4/12 lg:w-3/12 lg:mr-10'>
        <a href='#' className='font-sans text-sm px-4 lg:py-5 lg:px-10 text-md lg:text-lg border rounded-full border-black-500'>Say Hi!</a>
      </div>
    </div>
  )
}