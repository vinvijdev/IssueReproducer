import { NavigationContainer } from '@react-navigation/native'
import { render, screen } from '@testing-library/react-native'
import { setupServer } from 'msw/node'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { addTestIdModifier, buildTestId } from '../../../services/test-id/test-id'
import { configureMockStore } from '../../../services/testing/configure-mock-store'
import { RegistrationFormScreen } from './registration-form-screen'

const server = setupServer()

describe('registration-form-screen', () => {
  const store = configureMockStore()

  const renderScreen = (children: React.ReactNode) => {
    render(
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer>{children}</NavigationContainer>
        </Provider>
      </SafeAreaProvider>,
    )
  }

  const renderRegistrationScreen = ({ afterRegister }: { afterRegister?: (regToken: string) => void } = {}) => {
    renderScreen(<RegistrationFormScreen onHeaderPressClose={jest.fn()} afterRegister={afterRegister ?? jest.fn()} />)
  }

  const emailInput = buildTestId('registration_form_email')
  const passwordInput = buildTestId('registration_form_password')
  const formSubmitBtn = buildTestId('registration_form_submit')

  beforeAll(() => server.listen())
  afterEach(() => {
    jest.resetAllMocks()
    server.resetHandlers()
    store.clearActions()
  })
  afterAll(() => server.close())

  it('Should display no errors on initial render', async () => {
    renderRegistrationScreen()

    expect(await screen.findByTestId(formSubmitBtn)).toBeDisabled()
    expect(screen.queryByTestId(addTestIdModifier(emailInput, 'error'))).not.toBeOnTheScreen()
    expect(screen.queryByTestId(addTestIdModifier(passwordInput, 'error'))).not.toBeOnTheScreen()
  })
})
