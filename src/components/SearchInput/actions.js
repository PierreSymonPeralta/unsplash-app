const setFilter = (query) => {
  return {
    type: 'SEARCH',
    payload: query
  }
}

export {
  setFilter
}