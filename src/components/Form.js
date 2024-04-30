import React from "react";

function Form ({FormData,setFormData,BankData,setBankData}){
    function handleSubmit(event){
        event.preventDefault()
        console.log(BankData)
        const newId =
        BankData.length > 0 ?Math.max(...BankData.map(item=>item.id))+1:1      
      const newData = { ...FormData, id: newId };
      setBankData(BankData=>[...BankData, newData]);
        setFormData({
          Date:"",
          Description:"",
          Category:"",
          Amount:"" 
        })
      }
    
    function handleChange (e){
        const eventName = e.target.name
        const eventValue = e.target.value
        setFormData((FormData)=>({ ...FormData,[eventName]:eventValue}))
        console.log(`${eventName}:${eventValue}`)
    }
    
return (
  <form id="FillTable" onSubmit={handleSubmit} >
   <div className="form-group"> 
    <label htmlFor="date">Date</label>
    <input
    type="date"
    id="date"
    name="Date"
    value={FormData.Date}
    onChange={handleChange}
    required
    />   
  <input
  type="text"
  id="Description"
  name="Description"
  value={FormData.Description}
  onChange={handleChange}
  placeholder="Description..."
  required
  />
 <input
  type="text"
  id="Category"
  name="Category"
  value={FormData.Category}
  onChange={handleChange}
  placeholder="Category..."
  required
  />
 <input
  type="number"
  id="Amount"
  name="Amount"
  value={FormData.Amount}
  onChange={handleChange}
  placeholder="Amount..."
  required
  />
  </div>
  <button type="submit" className="centered-button">submit</button>
</form>
)
}
export default Form