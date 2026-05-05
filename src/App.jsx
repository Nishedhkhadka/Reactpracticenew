import Student from "./Student";
function App() {
  return(
    <>
      <Student name="Tekkumar" age="25"  isStudent = {true}/>
      <Student name="Tekkumar" age= {26} isStudent = {false}/>
      <Student/>
      <Student/>
    </>
    
  )
  
}

export default App;
