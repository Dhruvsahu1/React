import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='flex justify-start align-middle m-10'>
      <Card name="Thor" role="Fullstack Developer" company="Educonnect" description="Building Scalable Applications" avatar="./src/assets/thor.avif" cover="./src/assets/backThor.avif" />
      <Card name="IronMan" role="CyberSecurity Analyst" company="Educonnect" description="Building Scalable Applications" avatar="./src/assets/ironMan.avif" cover="./src/assets/backThor.avif" />
      <Card name="Groot" role="Cloud Computing" company="Educonnect" description="Building Scalable Applications" avatar="./src/assets/Groot.avif" cover="./src/assets/backThor.avif" />
    </div>
  )
}

export default App
