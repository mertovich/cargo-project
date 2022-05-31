import React from 'react'
import Greeting from '../ui-library/components/Greeting'
import SearchCargo from '../ui-library/components/SearchCargo'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <SearchCargo />
      <Greeting />
    </div>
  )
}

export default Home