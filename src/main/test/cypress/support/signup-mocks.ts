import * as Helper from './http-mocks'

export const mockEmailInUseError = (): void => Helper.mockInvalidCredentialsError(/signup/)
