import axios from 'axios'
import React from 'react'

export const createRecord = async (data) => {
  try {
    //const excelData = JSON.stringify(data);
    const result = await axios.post(process.env.REACT_APP_STORE_EXCEL,data);
    console.log(result.data);
  } catch (err) {
    console.log(err);
  }
}
