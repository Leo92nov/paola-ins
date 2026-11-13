import { site } from '../data/site'

export default function Footer() {

    return <>

        <footer className="bg-[#212121] w-full pb-8 overflow-x-hidden">

            <div className="flex flex-wrap lg:justify-between">

                <section className="flex flex-col gap-4 items-center pl-4 w-[100%]
                                    md:w-[50%] md:flex md:flex-col md:items-center md:mt-12 md:mx-auto 
                                    lg:w-[50%]
                                    2xl:w-[33%] 
                ">
                    <img className="w-30 h-20 mt-2" src={site.logo} alt="" />
                    <h2 className="text-white pt-2 font-montserrat">PAOLA INS ESTÉTICA INTEGRAL</h2>
                    <h2 className="text-white pt-2 font-montserrat">Blanco Encalada 175</h2>
                    <h2 className="text-white pt-2 font-montserrat">Mar de Ajó CP:7109</h2>
                    <h2 className="text-white pt-2 font-montserrat">Buenos Aires, Argentina</h2>
                    
                </section>

                <section className="flex flex-col jutify-start items-center gap-8 w-[100%]
                                    md:w-[70%] md:flex md:flex-col md:items-center md:mt-12 md:mx-auto 
                                    lg:w-[50%]
                                    2xl:w-[33%]">
                    <h2 className="mt-6 text-white font-garamond text-2xl">Vení a Visitarnos!</h2>
                    <iframe className="lg:w-115 w-full h-60 mt-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1901.3839992319681!2d-56.67548485289587!3d-36.72894969966991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c6539fd4dd9c1%3A0xcb56312e36e4067c!2sPaola%20Ins%20Est%C3%A9tica%20Integral!5e0!3m2!1ses!2sar!4v1794583927395!5m2!1ses!2sar" loading="lazy"></iframe>
                </section>

                <section className="mt-2 flex flex-col items-center w-[100%]
                                    md:w-[50%] md:flex md:flex-col md:items-center md:mt-12 md:mx-auto 
                                    lg:w-[50%] lg:flex lg:flex-col lg:items-center lg:mt-12
                                    xl:mt-12
                                    2xl:pl-36 2xl:w-[33%] 2xl:mt-14">

                    <h2 className="text-white pt-4 text-2xl mb-8 font-garamond
                    
                                    xl:text-center ">
                        Nuestras Redes:
                    </h2>
                    <ul className="gap-4 h-auto flex flex-col items-center
                                   lg:flex lg:flex-col lg:items-center
                                   xl:w-[50%]xl:flex xl:flex-col xl:mx-[30%]
                                   2xl:flex 2xl:flex-col 2xl:items-start 2xl:m-0 2xl:w-[100%]
                                   ">
                        <li className="w-[100%] 2xl:w-auto h-10 relative inline-block text-gray-700 font-montserrat hover:text-[#9b7861]
                            transition-colors duration-300
                            before:content-['']
                            before:absolute
                            before:left-1/2
                            before:bottom-0
                            before:h-[2px]
                            before:w-0
                            before:bg-[#9b7861]
                            before:transition-all
                            before:duration-300
                            hover:before:left-0
                            hover:before:w-[105%]">
                            <a className="w-full h-full text-white flex items-center gap-8 italic transition-transform duration-300 hover:scale-101" href="https://www.instagram.com/esteticapaolains/">
                                <img className="w-6 h-6 transition-transform duration-300 hover:scale-110" src="/igF.svg" alt="" /> /esteticapaolains
                            </a>
                        </li>
                        <li className="w-[100%] 2xl:w-auto h-10 relative inline-block font-montserrat text-gray-700
          
                            transition-colors duration-400
                            before:content-['']
                            before:absolute
                            before:left-1/2
                            before:bottom-0
                            before:h-[2px]
                            before:w-0
                            before:bg-[#9b7861]
                            before:transition-all
                            before:duration-300
                            hover:before:left-0
                            hover:before:w-[105%]">
                            <a className="w-full h-full text-white flex items-center gap-8 italic transition-transform duration-300 hover:scale-101" href="https://www.facebook.com/Paolainss/">
                                <img className="w-6 h-6 transition-transform duration-300 hover:scale-110" src="/fbF.svg" alt="" /> /Paolainss
                            </a>
                        </li>
                        <li className="w-[100%] 2xl:w-auto h-10 relative font-montserrat inline-block text-gray-700 
                            hover:text-[#9b7861] 
                            transition-colors duration-300
                            before:content-['']
                            before:absolute
                            before:left-1/2
                            before:bottom-0
                            before:h-[2px]
                            before:w-0
                            before:bg-[#9b7861]
                            before:transition-all
                            before:duration-300
                            hover:before:left-0
                            hover:before:w-[105%]">
                            <a className="w-full h-full text-white flex items-center gap-8 italic transition-transform duration-300 hover:scale-101" href={site.whatsapp}>
                                <img className="w-6 h-6 transition-transform duration-300 hover:scale-110" src="/wspF.svg" alt="" /> (+54 9) 22-5741-5589
                            </a>
                        </li>
                        

                    </ul>

                </section>

            </div>

        </footer>

    </>
}