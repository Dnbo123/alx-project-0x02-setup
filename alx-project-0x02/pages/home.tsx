import React from 'react'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import Header from '@/components/layout/Header'
export const Home: React.FC = () => {
  return(
    <div>
      <Card title="Home" content="Welcome to the project" />
      <Card title="About Us" content="Learn More about our Company" />
      <Card title="Contact Us" content="Get in touch with us" />
      <PostModal />
      <Header />
    </div>
  )
}

export default Home;