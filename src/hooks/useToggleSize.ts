import { useState } from "react";

type Props = {
  initial?: number;
};
const useToggleSize = ({ initial = 78 }: Props) => {
  const [fontSize, setFontSize] = useState(initial);

  return {
    fontSize,
    setFontSize,
  };
};

export default useToggleSize;
