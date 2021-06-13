export const updateView = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_VIEW':
      return null
    default:
      return state
  }
}

export const deleteCommentsofpet = (state = [], action) => {
  switch (action.type) {
    case 'DELETE_ALL_PET_COMMENT':
      return null
    default:
      return state
  }
}