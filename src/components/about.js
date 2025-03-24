import AboutImg from '../assets/about.png'

export default function About(){

    const config = {
        line1:'Hi,i am Bhuvaneshwaran.I am a Full stack Developer ',
        line2:'I am proficient in frontend skills like React.js,etc..',
        line3:'Im Back-end i know Node.js,etc...'
    }

    return <section id='about' className='flex flex-col md:flex-row bg-secondary'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center '>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>{config.line1}</p>
        <p className='pb-5'>{config.line2}</p>
        <p className='pb-5'>{config.line3}</p>
        </div>
        </div>
    </section>
}