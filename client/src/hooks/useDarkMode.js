import useLocalStorage from './useLocalStorage';

export const useDarkMode = (initialValue) => {
  const [dark, setDark] = useLocalStorage('darkmode', initialValue);

  const element = document.querySelector(".player-list");
  console.log("element =", element);
  if (element) {
    if (dark === true) {
      element.classList.add("dark-mode");
    }
    if (dark === false) {
      element.classList.remove("dark-mode");
    }  
  }

  return [dark, setDark];
}
