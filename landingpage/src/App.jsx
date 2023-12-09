import Navbar from "./components/Navbar";
import Mail from "./components/Mail";
import Types from "./components/Types";
import Card from "./components/Card";
import People from "./components/People";
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {
  const data = [
    {
      fullresponsive: "bi-window",
      topic:"Fully Responsive",
      description:"This theme will look great on any device, no matter the size!",
      title:"Fully Responsive Design",
      about:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
      image: "./images/bg-showcase-1.jpg",
      name: "Margaret E.",
      details:"This is fantastic! Thanks so much guys!",
      Peopleimage: "./images/testimonials-1.jpg",
      
    },
    {
      fullresponsive: "bi-layers",
      topic:"Bootstrap 5 Ready",
      description:"Featuring the latest build of the new Bootstrap 5 framework!",
      title:"Updated For Bootstrap 5",
      about:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
      image: "./images/bg-showcase-2.jpg",
      name:"Fred S.",
      details:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages",
      Peopleimage: "./images/testimonials-2.jpg",
      
    },
    {
      fullresponsive: "bi-terminal",
      topic:"Easy to Use",
      description:"Ready to use with your own content, or customize the source files!",
      title:"Easy to Use & Customize",
      about:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
      image: "./images/bg-showcase-3.jpg",
      name:"Sarah W.",
      details:"Thanks so much for making these free resources available to us!",
      Peopleimage: "./images/testimonials-3.jpg",
      
    }
  ]
  return (
    <>
      <Navbar/>
      <Mail/>
      <section class="features-icons bg-light text-center">
        <div class="container">
          <div class="row">
            {
              data.map((e,i)=>{
                return <Types data = {e} key={i}/>
              })
            }
          </div>
        </div>
      </section>  
      <section className="showcase">
        <div className="container-fluid p-0">
        {data.map((e, i) => {
          return <Card data={{ ...e, index: i }} key={i} />;
        })}
        </div>
      </section>  
      <section class="testimonials text-center bg-light">
        <div class="container">
          <h2 class="mb-5">What people are saying...</h2>
          <div class="row">
            {
              data.map((e,i)=>{
                return <People data = {e} key={i}/>
              })
            }
          </div>
        </div>  
      </section> 
      <Signup/>
      <Footer/>   
    </>
  )
}

export default App
