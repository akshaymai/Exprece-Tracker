import React,{useState} from "react";
import "./newExpenceForm.css";
 

const NewExpenceForm = (props) => {
    const [enterTitle,setEnterTitle]=useState('')
    const [enterAmount,setEnterAmount]=useState('')
    const [enterDate,setEnterDate]=useState('')

    // const [userInput,setUserInput]=useState({
    //    enterTitle:'',
    //    enterAmount:'',
    //    enterDate:'' 
    // })

    const handleUserTitle=(e)=>{

        setEnterTitle(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterTitle:e.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState,enterTitle:e.target.value}
        // })
    }
    const handleUserAmount=(e)=>{
        setEnterAmount(e.target.value)

        // setUserInput({
        //     ...userInput,
        //     enterAmount:e.target.value
        // })
        
    }
    const handleUserDate=(e)=>{
        setEnterDate(e.target.value)

        // setUserInput({
        //     ...userInput,
        //     enterDate:e.target.value
        // })
        
    }
    const handleSubmit=(e)=>{
        console.log(e)
        e.preventDefault();
        const data={
            discription:enterTitle,
            date:new Date(enterDate),
            price:+enterAmount
        }  
        props.onSaveExpenceData(data)
        setEnterDate('')
        setEnterTitle('')
        setEnterAmount('')
    }
    // console.log(enterAmount,enterTitle,enterDate)
  return (
      <form onSubmit={handleSubmit}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
       <label>Title</label>
       <input type="text" value={enterTitle} onChange={handleUserTitle}></input>
      </div>

      <div className="new-expense__control">
       <label>Amount</label>
       <input type="number" min="0.1" step="0.1" value={enterAmount} onChange={handleUserAmount}></input>
      </div>

      <div className="new-expense__control">
       <label>Date</label>
       <input type="date" min="2016-01-01" max="2023-12-31" value={enterDate} onChange={handleUserDate}></input>
      </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.handleCancle}>Cancel</button>
      <button type="submit"  onClick={handleSubmit}>Add Expence</button>
      </div>
     
      </form>
  );
};
export default NewExpenceForm;
