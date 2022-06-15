import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import InvestmentPlans from '../components/InvestmentPlans'
import Note from '../components/Note'
import WhyChoseVice from '../components/WhyChoseVice'
import LiveTrade from '../components/LiveTrade'
import HowItWorks from '../components/HowItWorks'
import Faq from '../components/Faq'
import UserFeedBacks from '../components/UserFeedBacks'
import Team from '../components/Team'
import DepositAndWithdrawal from '../components/DepositAndWithdrawal'
import RepresentativePost from '../components/RepresentativePost'
// import PaymentMethod from '../components/PaymentMethod'
import News from '../components/News'
import Subscribe from '../components/Subscribe'
import Location from '../components/SimpleMap'
import Footer from '../components/Footer'
import Scroller from '../components/Scroller'
import SimpleMap from '../components/SimpleMap'


const Home = () => {
  return (
    <div>
      <Scroller />
      <Hero />
      <AboutUs />
      <InvestmentPlans />
      <Note />
      <WhyChoseVice />
      <LiveTrade />
      <HowItWorks />
      <Faq />
      <UserFeedBacks />
      <Team />
      <DepositAndWithdrawal />
      <RepresentativePost />
      <News />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home