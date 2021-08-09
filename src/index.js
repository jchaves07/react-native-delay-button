import React, { useEffect } from "react";
import useState from "react-usestateref";
import { Button } from "react-native-paper";
const DelayButton = (props) => {
  const [remainSeconds, setRemainSeconds, ref] = useState(0);
  const [start, setStart, refStart] = useState(false);
  const {
    DelayTime,
    shadowColor,
    buttonIcon,
    delayColorActive,
    delayColorInactive,
    buttonMessageDelayCancel,
    buttonMessageInactive,
    customButtonStyle,
    actionOnClick,
  } = props;
  useEffect(() => {
    const intervalAction = () => {
      let current = ref.current - 1;
      if (refStart.current) {
        if (current == 0) {
          actionOnClick();
          setStart(false);
        }
      }

      setRemainSeconds(current);
    };

    if (start) {
      setRemainSeconds(DelayTime);

      const interval = setInterval(() => intervalAction(), 1000);
      return () => clearInterval(interval);
    }
  }, [start]);
  const PressButton = () => {
    setRemainSeconds(refStart.current ? 0 : DelayTime);
    setStart(!refStart.current);
  };
  return (
    <Button
      shadowColor={shadowColor ?? "white"}
      onPress={() => {
        PressButton();
      }}
      style={customButtonStyle}
      icon={buttonIcon}
      mode="contained"
      color={start ? delayColorActive : delayColorInactive}
    >
      {start
        ? `${buttonMessageDelayCancel} (${remainSeconds})`
        : buttonMessageInactive}
    </Button>
  );
};
export default DelayButton;
