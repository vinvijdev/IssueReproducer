import { useEffect } from 'react'
import { BackHandler } from 'react-native'

export const useAndroidBackButtonHandler = (handler: () => boolean) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler)
    return () => BackHandler.addEventListener('hardwareBackPress', handler).remove()
  }, [handler])
}
