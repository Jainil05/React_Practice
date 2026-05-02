import "./App.css";
import Card from "./Components/Card";
import { Bookmark } from "lucide-react";
import Section1 from "./Components/Section1/Section1";
import Note from "./Components/Notes_apk/Note";
import Gallery from "./Components/Gallery_Project/Gallery";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Routers/Navbar";
import Notfound from "./Pages/Notfound";
import Product from "./Pages/Product";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Child from "./Pages/Child";
import Courses from "./Pages/Courses";
import CoursesDetails from "./Pages/CoursesDetails";
import Navbar2 from "./Components/Routers/Navbar2";
function App() {
  // This is for card componets prctice
  // const jobOpenings = [
  //   {
  //     brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
  //     companyName: "Meta",
  //     datePosted: "5 days ago",
  //     post: "Frontend Engineer",
  //     tag1: "Full Time",
  //     tag2: "Junior Level",
  //     pay: "$65/hour",
  //     location: "Menlo Park, USA",
  //   },
  //   {
  //     brandLogo:
  //       "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
  //     companyName: "Amazon",
  //     datePosted: "2 weeks ago",
  //     post: "Backend Developer",
  //     tag1: "Full Time",
  //     tag2: "Mid Level",
  //     pay: "$70/hour",
  //     location: "Hyderabad, India",
  //   },
  //   {
  //     brandLogo:
  //       "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
  //     companyName: "Apple",
  //     datePosted: "3 weeks ago",
  //     post: "iOS Developer",
  //     tag1: "Part Time",
  //     tag2: "Senior Level",
  //     pay: "$90/hour",
  //     location: "Cupertino, USA",
  //   },
  //   {
  //     brandLogo:
  //       "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
  //     companyName: "Netflix",
  //     datePosted: "10 days ago",
  //     post: "Machine Learning Engineer",
  //     tag1: "Full Time",
  //     tag2: "Senior Level",
  //     pay: "$110/hour",
  //     location: "Los Gatos, USA",
  //   },
  //   {
  //     brandLogo:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
  //     companyName: "Google",
  //     datePosted: "1 week ago",
  //     post: "Cloud Solutions Architect",
  //     tag1: "Full Time",
  //     tag2: "Mid Level",
  //     pay: "$85/hour",
  //     location: "Bangalore, India",
  //   },
  //   {
  //     brandLogo:
  //       "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
  //     companyName: "Microsoft",
  //     datePosted: "4 weeks ago",
  //     post: "Data Scientist",
  //     tag1: "Full Time",
  //     tag2: "Junior Level",
  //     pay: "$75/hour",
  //     location: "Redmond, USA",
  //   },
  //   {
  //     brandLogo:
  //       "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
  //     companyName: "IBM",
  //     datePosted: "2 days ago",
  //     post: "AI Research Engineer",
  //     tag1: "Full Time",
  //     tag2: "Senior Level",
  //     pay: "$95/hour",
  //     location: "New York, USA",
  //   },
  //   {
  //     brandLogo:
  //       "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
  //     companyName: "Tesla",
  //     datePosted: "6 days ago",
  //     post: "Software Engineer",
  //     tag1: "Full Time",
  //     tag2: "Mid Level",
  //     pay: "$80/hour",
  //     location: "Austin, USA",
  //   },
  //   {
  //     brandLogo:
  //       "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
  //     companyName: "NVIDIA",
  //     datePosted: "3 weeks ago",
  //     post: "GPU Programmer",
  //     tag1: "Full Time",
  //     tag2: "Senior Level",
  //     pay: "$120/hour",
  //     location: "Santa Clara, USA",
  //   },
  //   {
  //     brandLogo:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
  //     companyName: "Oracle",
  //     datePosted: "8 days ago",
  //     post: "Database Administrator",
  //     tag1: "Full Time",
  //     tag2: "Mid Level",
  //     pay: "$70/hour",
  //     location: "Mumbai, India",
  //   },
  // ];
  // return (
  //   <>
  //     <div className="parent">
  //       {jobOpenings.map((jo, index) => {
  //         return (
  //           <div key={index}>
  //             <Card
  //               imgurl={jo.brandLogo}
  //               imgalt={jo.companyName}
  //               dateposted={jo.datePosted}
  //               companyname={jo.companyName}
  //               position={jo.post}
  //               servicetype={jo.tag1}
  //               lavel={jo.tag2}
  //               salary={jo.pay}
  //               location={jo.location}
  //             />
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </>
  // );

  // This is the ui layout Practice
  // This data is for ui layout practice
  // const users = [
  //   {
  //     img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     intro: '',
  //     color:'royalblue',
  //     tag: 'Satisfied'
  //   },
  //   {
  //     img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     color:'lightseagreen',
  //     intro: '',
  //     tag: 'Underserved'
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     color:'orange',
  //     intro: '',
  //     tag: 'Underbanked'
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     color:'pink',
  //     intro: '',
  //     tag: 'Underwear'
  //   },
  //   {
  //     img:'https://images.unsplash.com/photo-1748785826435-83c5062a5737?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     intro:'',
  //     color:'black',
  //     tag:'Average'
  //   }
  // ]
  // return (
  //   <>
  //     <Section1 users={users} />
  //   </>
  // );

  return (
    // This is for Notes Project
    // <Note/>

    // This is for Gallery Project
    // <Gallery/>

    // Routes Practices
    <div className="">
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* We use '*' for any other route which is we don't have(For Not Found Pages) */}
        <Route path="*" element={<Notfound/>} />
        {/* Nested Routing */}
        <Route path="/product" element={<Product/>}>
          <Route path="men" element={<Men/>} />
          <Route path="women" element={<Women/>} />
          <Route path="child" element={<Child/>} />
        </Route>
        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:id" element={<CoursesDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
