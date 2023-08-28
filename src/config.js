let features = {
    convertMenu: true, // when on, displays the menu bar with weight, size, and temperature and highlights the convert option
    replaceMenu: false, // when on, displays the replacePanel and highlights the replace option

    weightTab: true, // when on, displays the weightPanel and highlights the weight option
    sizeTab: false, // when on, displays the sizePanel and highlights the size option
    temperatureTab: false // when on, displays the temperaturePanel and highlights the temperature option
  };
  
  const setFeatureToggle = (featureName, value) => {
    features[featureName] = value;
  };
  
  export { features, setFeatureToggle };