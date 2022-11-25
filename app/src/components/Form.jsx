import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import { createRecord } from '../services/formRequest';

const Form = () => {

    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);
    const [excelData, setExcelData] = useState(null);

    useEffect(() => {
      if(excelData != null) {
        createRecord(excelData)
      }
    },[excelData])

    //handle Upload
    const fileType=[
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    const handleUpload = (e) => {
        let selectedFile = e.target.files[0];
        if(selectedFile){
          if(selectedFile && fileType.includes(selectedFile.type)){
            let reader = new FileReader();
            reader.readAsArrayBuffer(selectedFile);
            reader.onload=(e)=>{
              setExcelFileError(null);
              setExcelFile(e.target.result);
            }
          }
          else {
            setExcelFileError('Please select only excel file types');
            setExcelFile(null);
          }
        }
        else{
          console.log('plz select your file');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(excelFile!==null){
          const workbook = XLSX.read(excelFile,{type:'buffer'});
          const worksheetName = workbook.SheetNames[0];
          const worksheet=workbook.Sheets[worksheetName];
          const data = XLSX.utils.sheet_to_json(worksheet,{raw:true});
          setExcelData(data);
        }
        else{
          setExcelData(null);
        }
    }

  return (
    <div>
        <header className="App-header">
        <h1>Upload Excel File</h1>
        <div className="container">
        <form className="form" autoComplete='off' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="excel-file">Choose File</label>
            <input
              type="file"
              name="excel"
              className="form-control"
              onChange={handleUpload}
              required
            />
            {excelFileError &&
               <div className='text-danger'
                 style={{marginTop:5+'px', color: 'red'}}>{excelFileError}
                </div>}
              <button type='submit' className='btn btn-success'>Submit</button>
          </div>
        </form>
      </div>
      </header>
    </div>
  )
}

export default Form