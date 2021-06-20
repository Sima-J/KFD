import { OPEN, CLOSE, CLOSESETTINGS, OPENSETTINGS } from './ActionTypes'

export const OpenModal = (isAddItem = false) => {
  return {
    type: OPEN,
    payload: isAddItem,
  }
}
export const CloseModal = () => {
  return {
    type: CLOSE,
  }
}

export const OpenSettingModal = () => {
  return {
    type: OPENSETTINGS,
  }
}
export const CloseSettingModal = () => {
  return {
    type: CLOSESETTINGS,
  }
}
