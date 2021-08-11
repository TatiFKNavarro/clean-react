import React from 'react'

type Props = {
  text: string
  state: any
}

const SubmitButton: React.FC<Props> = ({ text, state }: Props) => {
  return (
    <button data-testid="submit" type="submit" disabled={state.isFormInvalid}>{text}</button>
  )
}

export default SubmitButton
