import React from 'react';
import { Banner } from './components/Banner';
import { Navbar } from "./components/Navbar";
import { Services } from './components/services';
import { WhatsApp } from './components/Whatsapp';
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Verification from './components/Verification';
import VerificationPic from './components/Verify_pic';
import VerifywithHelper from './components/Verify_with_helper';
import EmploymentCheck from './components/Employement';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Copyright from './components/Lastfooter';
import RegisteredHelpers from './components/Register_Helpers';



const router  = createBrowserRouter(
  [
    {
      path:'/',
      element: <div>
         <Navbar/> 
          <Services/>
         <Banner/>
         <RegisteredHelpers/>
        <WhatsApp/>
        <Footer/>
        <Categories/>
        <Copyright/>
      </div>
    },
    {
      path: '/verify-helpers/criminal-verification',
      element: <div>
        <Navbar/>
        <EmploymentCheck
      headerTitle="Criminal Verification Services"
      subTitle="Verify Helper Background"
      leftContent=" Hired Help stay close to you and your family. Ease your anxiety and verify your staff using our online services.
            We can verify helpers hired from Helper4U or elsewhere. All we need is the relevant details through a form so we
            can ensure your peace of mind"
      rightheader= "How We Verify Your Helper"
      rightContent_p1= "1. We request the relevant details via a form to be filled by you."
      rightContent_p2= "2. This includes one Govt. issued ID of the helper so we can check our online database across all Indian courts for any FIR filed against them."
      rightContent_p3= "3. This is more effective than police verification as the latter only checks data in the jurisdiction of a particular police station."
      rightContent_p4= "4. Report is shared within 30 minutes."
      fees="Rs. 500 + 18% GST per check"
    />
        <Verification/>
        <VerificationPic/>
        <VerifywithHelper/>
        <WhatsApp/>
        <Footer/>
        <Categories/>
        <Copyright/>
      </div>
    },{
      path: '/verify-helpers/employment-verification',
      element: <div>
        <Navbar/>
        <EmploymentCheck
      headerTitle="Employment Check Services"
      subTitle="Verify Past Employment"
      leftContent="When you hire a Maid, Cook, Nanny or Driver, they stay close to your family members. So, you should have as much information as possible about them. Use our online services & verify past employment of your Helper and staff. We can verify employment details whether hired from Helper4U or from elsewhere. All you need to do is fill a form and we do the rest."
      rightheader= "How We Verify Past Employment"
      rightContent_p1= "1. We request neccessary details via a form."
      rightContent_p2= "2. We correspond with the previous employer to verify their employement status, as well as take feedback on the helper's skill, attitude and behaviour."
      rightContent_p3= "3. If permitted, a recording of this call will be shared with you."
      rightContent_p4= "4. A detailed report will then be shared."
      fees="Rs. 250 + 18% GST per check"
    />
     <Verification/>
        <VerificationPic/>
        <VerifywithHelper/>
        <WhatsApp/>
        <Categories/>
        <Copyright/>
      </div>
    }
  ])


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
};

export default App;
