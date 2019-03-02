

const addMobileSize = (dataSet) => {
  const w = window.innerWidth - 40;
  return (() => {
    const newDataSet = dataSet.map(p => {
      const m = (p.urls || {} ).thumb.replace('w=200', `w=${w}`);
      p.urls.mobile = m;
      return p;
    })
    return newDataSet;
  })();
}
export {
  addMobileSize
}