const w = window.innerWidth - 30;

const addMobileSize = (dataSet) => {
  
  const newDataSet = dataSet.map(p => {
    const m = (p.urls || {} ).thumb.replace('w=200', `w=${w}`);
    p.urls.mobile = m;
    return p;
  })
  return newDataSet;
}


export {
  addMobileSize
}