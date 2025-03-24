import websiteimage1 from '../assets/ecommerce-websites.jpg';
import websiteimage2 from '../assets/food-ecommerce.jpg';
import websiteimage3 from '../assets/website-blog.jpg';

export default function Projects(){

    const config={
        projects:[
            {
                projectimage:websiteimage1,
                projectdesc:'These are some of my projects.i have built these with React,MERN and Vanilla CSS.Check them Out.',
                projectlink:'https://github.com/ajcode/ajpro1'
            },
            {
                projectimage:websiteimage2,
                projectdesc:'A Ecommerce Website,build with MERN STACK.',
                projectlink:'https://github.com/ajcode/ajpro2'
            },
            {
                projectimage:websiteimage2,
                projectdesc:'Food Ecommerce website like Swiggy, Build with Angular.',
                projectlink:'https://github.com/ajcode/ajpro3'
            },
        ]
    }

    return <section id='projects' className="flex flex-col px-5 py-20 justify-center bg-primary text-white">
    <div className="w-full">
            <div className="flex flex-col px-10 py-7">
                <h1 className="text-4xl text-white border-b-4 border-Secondary mb-5 w-[140px] font-bold">
                    Projects
                </h1>
                <p></p>
            </div>
        </div>

        <div className="w-full">
         <div className='flex flex-col md:flex-row px-10 gap-5'>

        {config.projects.map((project)=>(<div className='relative'>
            <img className='h-[300px] w-[500px]' src={project.projectimage}/>
        <div className='project_desc_effect'>
            <p className='text-center px-5 py-5'>{project.projectdesc} </p>
         <div className='flex justify-center'>   <div><a className='button_effect' target='_blank' href={project.projectlink}>Project site</a></div>
         </div>
 
         </div>
         </div>))}

         
       
            </div>  
        </div> 

    </section>
}