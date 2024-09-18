import React from 'react'
import HeadingComponent from './HeadingComponent'
import FollowUscomponent from './FollowUscomponent'
import FooterComponent from './FooterComponent'

const ShopComponent = () => {
  return (
    <>
      <HeadingComponent headingText={'Shop'} pageText={'SHOP'}/>
      <FollowUscomponent/>
      <FooterComponent/>
    </>
  )
}

export default ShopComponent