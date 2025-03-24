import Heroimg from '../assets/hero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero(){

    const config ={
        Role:' I m a Full Stack Developer and UI/UX Designer',
        social:{
            linkedin:'https://www.linkedin.com',
            facebook:'https://www.Facebook.com',
            twitter:'https://www.Twitter.com'
        }
    }

    return <section  className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' >
       <div className='w-1/2 flex flex-col'> <h1  className=' text-white text-6xl font-herofont'  >Hi, <br/> I am Bhuvaneshwaran
        <p className='text-2xl'>{config.Role}</p>
        </h1>
        <div className='flex py-10' >
            <a href={config.social.twitter} className='pr-3 hover:text-yellow-300'><AiOutlineTwitter size={40}/></a>
            <a href={config.social.facebook} className='pr-3 hover:text-yellow-300 '><AiOutlineFacebook size={40}/></a>
            <a href={config.social.linkedin} className='pr-3 hover:text-yellow-300'><AiOutlineLinkedin size={40}/></a>
        </div>
        </div>
        <img  className='md:w-1/3' src ={Heroimg}/ >
            
    </section>
}