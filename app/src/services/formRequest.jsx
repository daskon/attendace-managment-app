import axios from 'axios'
import React from 'react'

export const createRecord = async (data) => {
  try {
    await axios.post(process.env.REACT_APP_API + '/store',data);
  } catch (err) {
    console.log(err);
  }
}

export const getAttentdance = async () => {
  try{
    const result = await axios.get(process.env.REACT_APP_API + '/find');
    return result.data;
  } catch (err) {
    console.log(err);
  }
}
