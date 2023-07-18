type ObjectInArray1 = { 
  id : number, 
  name : string, 
  hobby: string
}[] 

type ObjectInArray2 = { 
  [key: string ] : string | number
}[]

const members : ObjectInArray1 = [
  { id: 1, 
    name: '浅野', 
    hobby: 'サッカー' 
  }, { 
    id: 2, 
    name: '伊東', 
    hobby: 'サッカー'
  }, 
]

for(const member of members){
  console.log(`id: ${member.id}, name: ${member.name}`)
}
