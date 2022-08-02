import React from 'react'
import { CharacterCount } from './CharacterCount'
import { TextInput } from './TextInput'

export const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}
