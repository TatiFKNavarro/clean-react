import { AccountModel } from '@/domain/models'

export interface AddAccount {
  add: (params: AddAccount.Params) => Promise<AddAccount.Model>
}
export namespace AddAccount {
  export type Params = {
    email: string
    password: string
    passwordConfirmation: string
    name: string
  }
  export type Model = AccountModel
}
