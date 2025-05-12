import { useState } from "react";

const useFile = () => {
  const [file, setFile] = useState<File | null>(null);

  return { file, setFile };
};

export default useFile;