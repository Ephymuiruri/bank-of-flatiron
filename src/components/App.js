import React,{useState} from 'react';
import '../App.css';
import Form from './Form';
import Header from './Header'
import Search from './Search'
import Table from "./Table"
import Data from '../data/data ';

// should contain BankData && OnSubmit to pass it to Table 

function App() {
 const [search,setSearch]=useState("")
 const [FormData,setFormData]= useState({
  date:"",
  Description:"",
  Category:"",
  Amount:""
})
const [BankData, setBankData] = useState(Data);

console.log(BankData)
  return (
    <div className="App">
    <Header />
    <Search setSearch={setSearch} />
    <Form  FormData={FormData} setFormData={setFormData} BankData={BankData} setBankData={setBankData} />
    <Table  searchedData={search} BankData={BankData} />
    </div>
  );
}

export default App;
