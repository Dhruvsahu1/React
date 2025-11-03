import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='Parent'>
     <Card user="Dhruv Sahu" age={30} img="https://images.unsplash.com/photo-1761892464046-dd9ee385ae90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1964" />
     <Card user="Tony Stark" age={48} img="https://images.unsplash.com/photo-1753847726685-6af24062aa9e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600"/>
     <Card user="Heat Blast" age={88} img="https://plus.unsplash.com/premium_photo-1752865066686-a58cb4d5b966?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600"/>
    </div>
    // You can add more as you want from here 
  )
}

export default App
