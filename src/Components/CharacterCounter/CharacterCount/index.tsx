import { useRecoilValue } from 'recoil'
import { charCountState } from 'recoilState/selectors';

export const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return (
    <div>
      <div>CharacterCount</div>
      <div>chars: {count}</div>
    </div>
  )
}
