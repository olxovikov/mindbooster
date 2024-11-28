import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import ReportForm from './components/Reports/ReportForm';
import ReportList from './components/Reports/ReportList'
import ReportsActions from './components/Reports/ReportsActions';


function App() {
  const [reports, setReports] = useState(JSON.parse(localStorage.getItem('REPORT_DATA')) || [])

  function runSetReports(newText) {
    const newReport = {
      text: newText,
      isSelected: false,
      id: uuidv4(),
      date: new Date().toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    })    
    }
    setReports([newReport, ...reports])
    localStorage.setItem('REPORT_DATA', JSON.stringify([newReport, ...reports]))
  }

  function deleteSelected() {
    setReports(reports.filter((element)=>{return !element.isSelected}))
    localStorage.setItem('REPORT_DATA', JSON.stringify(reports.filter((element)=>{return !element.isSelected})))
  }

  function selectReport(id) {

    let result = reports.map((element)=>{
      if (element.id === id && element.isSelected === false) {return {...element, isSelected: true}}
      else if (element.id === id && element.isSelected === true) {return {...element, isSelected: false}}
      else {return {...element}}
    })

    setReports(result)
    localStorage.setItem('REPORT_DATA', JSON.stringify(result))

  }

  function selectAll() {
    const allSeleced = reports.every(element => element.isSelected)

    setReports(reports.map((element)=>{
      return {...element, isSelected: !allSeleced}
    }))

    localStorage.setItem('REPORT_DATA', JSON.stringify(reports.map((element)=>{
      return {...element, isSelected: !allSeleced}
    })))
  }

  const selectedReportsCounter = reports.filter((element)=>element.isSelected).length;

  function isDisabled() {
    return (selectedReportsCounter > 0);
  }

  return (
    <div className="App">
      <h1>MindBooster</h1>
      <ReportForm runSetReports={runSetReports}/>
      {reports.length ? 
        <>
          <ReportsActions isDisabled={!isDisabled()} selectAll={selectAll} deleteSelected={deleteSelected}/>
          <ReportList selectReport={selectReport} reports={reports}/>
        </>
      : <h2>List is empty.</h2>}
      {
        selectedReportsCounter>0 && 
        <div style={{position: 'fixed', right: 10, top: 10, color: 'rgb(17,40,65)', backgroundColor: 'white', padding: 5, border: '3px solid rgb(17,40,65)', borderRadius: 15}}>
          <p style={{margin: 0}}>{`Selected items: ${selectedReportsCounter}`}</p>
        </div>
      }
    </div>
  );
}

export default App;