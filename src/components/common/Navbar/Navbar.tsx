// import React from 'react'

import { COLORS } from "../../../constants/uiConstants.ts"

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: COLORS.primary_01, height: '64px' }}>
      <p style={{color: COLORS.primary, fontSize: '22px', fontWeight: 500,  }}>Navbar</p>
    </nav>
  )
}
