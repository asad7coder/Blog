import { createContext } from "react";
import img1 from "../../assets/js/01- javaScript notes.png";
import img2 from "../../assets/js/02-history of js.png";
export const StoreData = createContext();

const ContextProvider = ({ children }) => {
  const DataForRagular=[
  {
      imgs:img1,
      heading:'Intoduction to JavaScript',
      description:'List of topic',
      link:'#',
      topics:'JavaScript',
    },
    {
      imgs:img2,
      heading:'History of JavaScript',
      description:'History of JavaScript',
      link:'#',
      topics:'JavaScript',
    },
    {
      imgs:img2,
      heading:'History of JavaScript',
      description:'History of JavaScript',
      link:'#',
      topics:'JavaScript',
    },
    {
      imgs:img2,
      heading:'History of JavaScript',
      description:'History of JavaScript',
      link:'#',
      topics:'JavaScript',
    }
  ]
  return (
    <StoreData.Provider value={DataForRagular}>{children}</StoreData.Provider>
  );
};
export default ContextProvider;