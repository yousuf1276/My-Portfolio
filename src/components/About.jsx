const About = () => {
  return (

    <section id='about' className='container mh-100 card '>

      <div class='row p-5'>
        <div class='col-md-4 text-center'>
          <img src="./myphoto.png" alt="" className='about-img' />
        </div>
        <div class='col-md-7 '>
          <h2 className='text-center'>About Me</h2>
          <p class="text-justify">Hello, I'm Mohammad Yousuf, but I prefer to be called Yousuf. I am currently
           pursuing a Under Graduate Course(UGC) in the Stream of Information Technology in St.Peter's
            Engineering College to further enhance my skills and knowledge.</p>
          <p class="text-justify">I'm highly skilled in web technologies and frameworks, specializing in
           front-end and back-end development with HTML, CSS, JavaScript, MERN stack,SpringBoot, JAVA, and MYSQL.
            I pay great attention to detail and deliver top-notch, user-friendly web applications. I'm adept at
             problem-solving and enjoy collaborating with cross-functional teams. I'm committed to continuous 
             learning and keeping up with industry trends. With excellent communication and problem-solving 
             abilities, I excel in both independent and team-oriented environments. I'm dedicated, driven, and
              passionate about creating outstanding web experiences in the ever-changing world of technology.</p>
        </div>
      </div>
    </section>
  )
}

export default About;