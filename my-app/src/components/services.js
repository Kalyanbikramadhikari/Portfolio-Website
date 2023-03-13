import "../style.css"
function Services() {
    return ( 
        <div className="services" id="service">
            
            <h1 className="me">Services</h1>
            <div className="services-list">
                <div >
                <i class="fa-solid fa-code"></i>
                    <h2>Web Design</h2>
                    <p> I am a skilled web designer with expertise in creating visually appealing and user-friendly websites. I can design and develop responsive websites and landing pages.</p>
                    <a href="#">learn more</a>
                </div>
                <div >
                <i class="fa-solid fa-crop"></i>
                    <h2>UI/UX design</h2>
                    <p> I specialize in designing user-centered interfaces and user experiences for websites and apps." or "I am a UI/UX designer, focused on creating intuitive and engaging digital products.</p>
                    <a href="#">learn more</a>
                </div>
                <div >
                <i class="fa-brands fa-app-store"></i>
                    <h2>App Design</h2>
                    <p> I am an app designer, specialized in creating visually appealing and user-friendly mobile applications</p>
                    <a href="#">learn more</a>
                </div>
            </div>
        </div>
     );
}

export default Services;