let featuresUpper = {
    convertMenu: true, // when on, displays the menu bar with weight, size, and temperature and highlights the convert option
    replaceMenu: false, // when on, displays the replacePanel and highlights the replace option
  };

  let featuresLower = {
    weightTab: true, // when on, displays the weightPanel and highlights the weight option
    sizeTab: false, // when on, displays the sizePanel and highlights the size option
    temperatureTab: false // when on, displays the temperaturePanel and highlights the temperature option
  };
  
  // basically ensures that if 'convert' is on, 'replace' is off (and vice-versa, and same for featuresLower)
  function flickFeatureToggle(featureName, upperOrLower) {
  if (upperOrLower === 'upper') {
    for (const key in featuresUpper) {
      if (key !== featureName) {
        featuresUpper[key] = false;
      }
    }
    featuresUpper[featureName] = true;
  }
  if (upperOrLower === 'lower') {
    for (const key in featuresLower) {
      if (key !== featureName) {
        featuresLower[key] = false;
      }
    }
    featuresLower[featureName] = true;
  }
}
  
  export { featuresUpper, featuresLower, flickFeatureToggle };