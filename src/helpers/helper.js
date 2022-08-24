export const extractData = (object, property) => {
  const arr = [];
  for (let key in object) {
    arr.push(object[key][property]);
  }
  return arr;
};

export const extractValues = (object) => {
  const arr = [];
  for (let key in object) {
    arr.push(object[key]);
  }
  return arr;
};

export const getUserThemePref = () => {
  const theme = localStorage.getItem("theme");
  if (theme !== null) {
    return theme === "false" ? false : true;
  } else {
    return setUserThemePref(false);
  }
};

export const setUserThemePref = (value) => {
  localStorage.setItem("theme", value);
  return value;
};
