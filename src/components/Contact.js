

export default function Contact(){

        const config={
            email:'bhuvaneshwaranaj@gmail.com',
            phone:'9361201123'
        }

    return <section id='contact' className='flex flex-col  bg-primary px-5 py-32 text-white'>
        

        <div className='flex flex-col items-center'>

        <h1 className='text-4xl  border-b-4 border-Secondary mb-5 w-[130px] font-bold'>Contact</h1>
        <p className='pb-5'>If, You want to discuss more on details,Please Contact me</p>
        <p className='px-2 py-2 '><span className='font-semibold'>Email: </span>{config.email} </p>

        <p className='px-2 '><span className='font-semibold'>Phone: </span>{config.phone} </p>
        </div>

    </section>
} 