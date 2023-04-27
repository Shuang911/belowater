import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavigationContainer from "./NavigationContainer";

const ContainerFooter = () => {
  const navigate = useNavigate();
  const onFAQsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="relative w-[87.5rem] h-[13.97rem] shrink-0">
      <NavigationContainer
        dimensionsText="/vector-12.svg"
        dimensionsText2="/path4.svg"
        dimensionsText3="/path5.svg"
        dimensionsText4="/ellipse-12.svg"
        dimensionsText5="/vector-22.svg"
        dimensionsText6="/vector-32.svg"
        dimensionsText7="/vector-42.svg"
        dimensionsText8="/vector-52.svg"
        dimensionsText9="/vector-62.svg"
        dimensionsText10="/vector-72.svg"
        dimensionsText11="/vector-82.svg"
        propPosition="absolute"
        propFlexShrink="unset"
        propTop="-0.02rem"
        propLeft="8.56rem"
        onFAQsTextClick={onFAQsTextClick}
      />
    </div>
  );
};

export default ContainerFooter;
