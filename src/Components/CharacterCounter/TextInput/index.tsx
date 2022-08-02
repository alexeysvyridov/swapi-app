import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { textState } from 'recoilState';

export const TextInput = ():JSX.Element => {
  const [text, setText] = useRecoilState(textState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <br />
      Echo {text}
    </div>
  )
}
