const EventComponent = () => { 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value) 
  }
  
  return (<>
    <h2>Event</h2>
    <input type="text" onChange={handleChange} /> 
  </>)
}


export default EventComponent
