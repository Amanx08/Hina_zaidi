"use client"
export const  URL = "https://script.google.com/macros/s/AKfycbyOJlLpIu1cDi7kt6jrwsHwntyvHtb6WrEI33jiBjTSwAcI_b_ixrSn5CMMPL-SGAKxZw/exec";

import { useEffect, useState } from 'react';

const useParseSliceData = (slider_data = []) => {
  const [sliceData, setSliceData] = useState(null);

  useEffect(() => {
    try {
      const d = JSON.parse(slider_data);
      setSliceData(d);
    } catch (error) {
      // console.error("JSON parsing error:", error);
    }
  }, [slider_data]);

  return sliceData;
};

export default useParseSliceData;
