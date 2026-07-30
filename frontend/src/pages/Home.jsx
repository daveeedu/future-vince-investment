import React, { useState }from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import InvestmentPlans from "../components/InvestmentPlans";
import WhyChoseVice from "../components/WhyChoseVice";
import HowItWorks from "../components/HowItWorks";
import Faq from "../components/Faq";
import UserFeedBacks from "../components/UserFeedBacks";
import Team from "../components/Team";
import DepositAndWithdrawal from "../components/DepositAndWithdrawal";
import RepresentativePost from "../components/RepresentativePost";
import News from "../components/News";
import Footer from "../components/layout/Footer.jsx";
import Scroller from "../components/Scroller";

import BACKEND from "../services/backend.js";
import Storage from "../lib/storage.js";
import Navigationbar from "../components/layout/Navbar.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
	const [isSignedUp, setIsSignedUp] = useState(false);
	let auth = Storage.get("token");
	if (auth) {
		new BACKEND()
			.isAuthenticated()
			.then((user) => {
				if (user) {
					Storage.set("user", user.data);
					if(auth.type.toLowerCase() === 'user') navigate("/dashboardtwo");
					else navigate("/AdminDash2");
				}
			})
			.catch(console.error);
	}

  return (
    <div className="overflow-x-hidden z-20">
      <Navigationbar isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} />
      <div className="bg-red-400">
      <Scroller />
      </div>
      <Hero />
      <AboutUs />
      <InvestmentPlans isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} />
      <WhyChoseVice />
      <HowItWorks />
      <Faq />
      <UserFeedBacks />
      <Team />
      <DepositAndWithdrawal />
      <RepresentativePost isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
