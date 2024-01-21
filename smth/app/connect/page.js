import React from 'react'
import Chat from '../components/Chat'
import PageTitle from '../components/PageTitle'

const page = () => {
  return (
    <>
      <div>
        <PageTitle title="Chat" size="4"/>
      </div>
      <Chat></Chat>
    </>
  )
}

export default page
