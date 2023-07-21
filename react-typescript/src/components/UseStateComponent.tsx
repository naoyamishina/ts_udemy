import { useState } from 'react' 

type Member = { 
  id: number, 
  name: string 
}

const UseStateComponent = () => {
  const [ count, setCount ] = useState<number>(0) 
  const [ member, setMember ] = useState<Member>({ 
    id: 1, 
    name: '三苫' 
  })
  
  const handleClick = () => setCount( count + 1) 
  
  return (<>
    <h2>useState</h2>
    <div>{ count }</div>
    <button onClick={handleClick}>+1</button>

    <div>{ member.id} { member.name }</div>
  </>)} 

export default UseStateComponent
