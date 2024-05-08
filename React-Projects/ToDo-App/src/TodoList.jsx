import React, { useState } from "react";

function TodoList(){
  const[activity, setActivity]= useState("");
  const[listData, setListData]= useState([]);
  function addActivity(){
    // asynchronous work 
      //  setListData([...listData, activity]);
      //  console.log(listData)
    //  synchronous work   
      setListData((listData)=>{
        const updatedList= [...listData, activity]
        console.log(updatedList)
        setActivity('');
        return updatedList
      })
  }
  function removeActivity(i){
       const updatedList= listData.filter((elm, id)=>{
        return i!=id;
       })
       setListData(updatedList);
  }
  function removeAllActivity(){
    setListData([]);
  }
  return(
  <>
  <div className="container">
    <div className="header">TODO LIST</div>
    <input type="text" placeholder="Add Activity" value={activity} onChange={(e)=>setActivity(e.target.value)}/>
    <button onClick={addActivity}>Add</button>
    <p className="list-heading">Here is your list:{")"}</p>
    {listData!=[] && listData.map((data, i)=>{
      return(
      <>
      <p key={i}><div className="listData">{data}</div>
      <div className="btn-position"><button onClick={()=>removeActivity(i)}>Remove(-)</button></div>
      </p>
      </>
    )
    })}
    {listData.length>=1 && <button onClick={removeAllActivity}>Remove all</button>}
  </div>
  </>
  )
}

export default TodoList;