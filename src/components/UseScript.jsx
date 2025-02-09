import { useEffect } from "react";

const UseScript = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = props.src;
    // script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Pulizia dello script quando il componente si smonta
    };
  }, []);

};

export default UseScript;