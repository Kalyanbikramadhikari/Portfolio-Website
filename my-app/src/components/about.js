import '../style.css'
import React  from 'react'
function About() {

    
    return ( 
        <div className="about" id="about">
            <h1 className="me">About Me</h1>
            <div className="columns">
                <div className="column-1">
                    <img src="./assets/images/me.jpg" alt=""/>
                    
                </div>
                <div className="column-2">
                    {/* <p>El Camino: A Breaking Bad Movie is a 2019 American neo-Western crime thriller film that serves as a sequel and epilogue to the television series Breaking Bad. It continues the story of Jesse Pinkman, who partnered throughout the series with former teacher Walter White to build a crystal meth empire based in Albuquerque. Series creator Vince Gilligan wrote, directed, and produced the film; Aaron Paul (pictured) reprised his role as Jesse Pinkman. Gilligan started considering the story of El Camino while writing Breaking Bad's series finale. He approached Paul with the idea several years later, but told few others. After the script was complete and studio backing was obtained, principal photography discreetly began in New Mexico. In August 2019, Netflix released a trailer and unveiled the film's premiere date, surprising fans and critics alike due to the secrecy surrounding the project. The film drew positive reviews and won the Critics' Choice Award for Best Movie Made for Television. </p> */}
                    <p className='about-me'>I am Kalyan Bikram Adhikari, a skilled and ambitious individual currently pursuing an undergraduate degree in Computer Science at Kathmandu University.<br/>I ahve a solid background in front-end development, which I developed during my studies. I have strong background in the field of Computer Science. I was a known person during my school and 10+2 at Nepal Police School for my ability to create and visualize things.
                    My experience in front-end development has given me the skills to create visually appealing and user-friendly websites and applications.My understanding of interface design has also allowed me to create intuitive and easy-to-use interfaces for my users. My professors often say to me "Your passion for Computer Science and your dedication to your studies makes you a valuable asset in the field." </p>
                    <div className="tab-titles">
                        <div className="skills">
                            <p className="tab-links " >Skills</p>
                            <p className='edu'></p>
                                <div className="tab-contents active-tab" id="skills">
                                <ul>
                                    <li><span>UI/UX</span> <br/> Designing Web/App interfaces</li>
                                    <li><span>Web Development</span> <br/> Designing and developing different websites.</li>
                                    
                                </ul>
                            </div>
                        </div> 
                        <div className="education">
                            <p className="tab-links " >Education</p>
                            <p className='edu2'></p>
                                <div className="tab-contents active-tab" id="skills">
                                <ul>
                                    <li><span>Computer Science</span> <br/> At Kathmandu University from 2019-running <br/> Dhulikhel,Kavre</li>
                                    <li><span>10+2</span> <br/> Nepal Police School. <br/> Sanga,Kavre</li>
                                    <li><span>SEE</span> <br/> Nepal Police School.<br/>  Sanga,Kavre</li>


                                </ul>
                            </div>
                        </div>
                       
                        {/* <p className="tab-links"onClick="opentab('Experience')">Experience</p> */}
                        {/* <p className="tab-links">Education</p> */}
                    </div>
                    {/* <div className="seperator"> */}
                    
                    {/* <div className="tab-contents" id="Experience">
                        <ul>
                            <li><span>2019-Current</span> <br/> Designing Web/App interfaces and other different kind of templates</li>
                            <li><span>2021-2021</span> <br/> Internship at HariSunita co-operation</li>
                            
                        </ul>
                    </div> */}
                    
                    {/* </div> */}
                    
                </div>
            </div>

            {/* This should be included somewhere in this file. */}

            {/*  var tablinks= document.getElementsByClassName('tab-links');
      var tabcontents= document.getElementsByClassName('tab-contents');

      function opentab(tabname){
        for(tablink of tablinks){
          tablink.classList.remove("active-link")
        }
        for(tablink of tablinks){
          tablink.classList.remove("active-link")
        }
        event.currentTarget.classList.add('active-link');
        document.getElementById(tabname).classList.add('active-tab')
      }
       */}
        </div>
     );
}

export default About;