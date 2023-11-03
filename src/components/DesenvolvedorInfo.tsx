import imgGithub from '../img/github.png'
import imgLinkdin from '../img/logotipo-do-linkedin.png'

export const DesenvolvedorInfo = ()=>{
    return(
        <div className=" text-center bg-slate-800">
            <h2 className=" font-bold text-lg text-white">Italo Santiago</h2>
            <div className='flex flex-row justify-center items-center gap-5'>
                <a rel="noopener noreferrer" target='black_' href='https://github.com/ItaloMirandaSantiago'> <img className=' w-10' src={imgGithub} alt='Github' /> </a>
                <a rel="noopener noreferrer" target='black_' href='https://www.linkedin.com/in/italo-miranda-santiago-618528226/'> <img className='w-10' alt='Linkdin' src={imgLinkdin}/> </a>
            </div>
        </div>
    )
}