import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AccessDeniedError } from '@/domain/errors'
import { ApiContext } from '@/presentation/contexts'

type CallBackType = (error: Error) => void
type ResultType = CallBackType

export const UseErrorHandler = (callback: CallBackType): ResultType => {
  const { setCurrentAccount } = useContext(ApiContext)
  const history = useHistory()
  return (error: Error): void => {
    if (error instanceof AccessDeniedError) {
      setCurrentAccount(undefined)
      history.replace('/login')
    } else {
      callback(error)
    }
  }
}
