import ResumeImg from '../assets/resume.jpg'

export default function Resume(){

    const config={
        link:'https://file-examples.com/'
    }

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[400px] h-[400px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center '>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[130px] font-bold'>Resume</h1>
        <p className='py-5'>You can download My Resume..  <a className='button_effect' href={config.link}> Download </a></p>
        </div>
        </div>
    </section>
} 