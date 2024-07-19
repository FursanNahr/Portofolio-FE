import fotoUkur from '../assets/fotoukur.png'
import shtml from '../assets/HTML-5-Badge-Logo.png'
import scss from '../assets/css.png'
import sscss from '../assets/scss.png'
import sbootstrap from '../assets/Bootstrap.png'
import svue from '../assets/Vue.png'
import sgithub from '../assets/github.png'
import CV from '../assets/text/CV_Fursan Nahr.pdf'


const info = () => {
    return (
        <>
            <div className="grid gap-16 max-w-[870px] mx-auto sm-desktop:gap-8 sm-desktop:max-w-[900px] sm-desktop:px-[20px]">
                <h1 className="text-center text-2xl font-semibold">MY INFO</h1>
                <div className="flex gap-10 justify-start md:flex-col md:items-center md:w-full">
                    <div className="flex justify-center sm-desktop:w-80 md:order-2">
                        <img src={fotoUkur} alt="" className="h-[28rem] max-w-[32rem] [mask-image:linear-gradient(to_bottom,_hsla(230,_40%,_16%,_1)_60%,_transparent_100%)] sm-desktop:w-64 sm-desktop:h-80" />
                    </div>
                    <div className="flex flex-col gap-10 justify-center w-96 sm-desktop:gap-6 md:order-1">
                        <h5 className="h-fit w-fit relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-[33%] after:h-[2px] after:bg-white">About Me</h5>
                        <p>Passionate About Creating Websites. I have months of experience as a <span className="text-[#7585d7] font-[600]">front-end developer</span> with several completed projects.</p>
                        <a href={CV} className="text-center py-4 px-8 w-fit bg-[#4D62CB] sm-desktop:w-full" download="" target="_blank">Download CV</a>
                    </div>
                </div>
                <div className="grid gap-10 place-items-center md:gap-8">
                    <h5 className="h-fit w-fit relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-[33%] after:h-[2px] after:bg-white md:ml-[-270px]">Experience</h5>
                    <div className="flex justify-between md:flex-col md:gap-3">
                        <h2 className="text-2xl font-semibold">PT. Curaweda</h2>
                        <div className="w-[22rem] grid gap-1">
                            <h4 className="font-[600]">Web Front-End</h4>
                            <p className="text-sm">02/24 - 06/24</p>
                            <p className="text-sm">Become the front-end in creating Absensi SMK 4 and Keraton websites</p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-14 sm-desktop:gap-8 md:place-items-center">
                    <h5 className="relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-[40%] after:h-[2px] after:bg-white md:ml-[-315px]">Skills</h5>
                    <div className="grid grid-cols-9 md:grid-cols-3 md:gap-y-12 md:place-items-center md:gap-x-12">
                        <div className="h-9 w-fit grid place-items-center">
                            <img src={shtml} alt="" className="h-9" />
                            <p className="w-fit">HTML</p>
                        </div>
                        <div className="h-9 w-fit grid place-items-center">
                            <img src={scss} alt="" className="h-9" />
                            <p className="w-fit">CSS</p>
                        </div>
                        <div className="h-9 w-fit grid place-items-center">
                            <img src={sscss} alt="" className="h-9" />
                            <p className="w-fit">SCSS</p>
                        </div>
                        <div className="h-9 w-fit grid place-items-center">
                            <img src={sbootstrap} alt="" className="h-9" />
                            <p className="w-fit">Bootstrap</p>
                        </div>
                        <div className="h-9 w-fit grid place-items-center">
                            <img src={svue} alt="" className="h-9" />
                            <p className="w-fit">Vue Js</p>
                        </div>
                        <div className="h-9 w-fit grid place-items-center">
                            <img src={sgithub} alt="" className="h-9" />
                            <p className="w-fit">Git Hub</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default info;