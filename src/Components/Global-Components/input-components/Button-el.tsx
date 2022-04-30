import { Button, ButtonProps } from 'antd'
import React from 'react'

declare type ColorScheme = 'primary' | 'secondary' | 'ghost'

interface BtnProps extends ButtonProps {
  colorScheme?: ColorScheme
}

function ButtonEl({ children, colorScheme, size, icon ,...Rest }: BtnProps) {
  return (
    <Button
      className={`button__parent ${getType(colorScheme || 'ghost')}`}
      size={size ?? 'middle'}
      icon={icon}
      {...Rest}
    >
      {children}
    </Button>
  )
}

export default ButtonEl

const getType = (type: ColorScheme): string => {
  switch (type) {
    case 'primary':
      return 'button__primary'
    case 'secondary':
      return 'button__secondary'
    default:
      return 'button__ghost'
  }
}
