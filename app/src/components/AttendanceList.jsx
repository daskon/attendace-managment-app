import { useState } from 'react'
import { getAttentdance } from '../services/formRequest';
import './style.css';

const AttendanceList = () => {

  const [results,setResult] = useState();

  const handleBtn = async () => {
    const data = await getAttentdance();
    setResult(data);
  }

  return (
    <div className='App-header'>
      <button onClick={handleBtn}>View List</button>
      <div className="att-list">
        { results && <table>
          <thead>
            <tr>
                  <th>Employee ID</th>
                  <th>CheckIn</th>
                  <th>CheckOut</th>
                  <th>TotalHours</th>
            </tr>
          </thead>
        {results.map((result) => (
          <tbody>
            <tr>
              <td>{result.employee_id}</td>
              <td>{result.CheckIn}</td>
              <td>{result.CheckOut}</td>
              <td>{result.TotalHours}</td>
            </tr>
          </tbody>
        ))}
        </table>}
      </div>
    </div>
  )
}

export default AttendanceList