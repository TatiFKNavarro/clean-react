import React from 'react'
import Styles from './spinner-styles.scss'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  isNegative?: boolean
}

const Spinner: React.FC<Props> = (props: Props) => {
  const negativeClass = props.isNegative ? Styles.negative : ''

  return (
    <div data-testid="spinner" {...props} className={[Styles.spinner, negativeClass, props.className].join(' ')}>
      <div /><div /><div /><div />
    </div>
  )
}

export default Spinner
