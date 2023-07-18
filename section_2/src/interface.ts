interface MemberInterface { 
  name: string,
  age: number
}

const memberI: MemberInterface = { 
  name: "前田",
  age: 30
}

interface HobbyInterface { 
  hobby: string 
}

interface ProfileInterface extends MemberInterface, HobbyInterface {}

const memberInfoI: ProfileInterface = { 
  name: '前田',
  age: 25, 
  hobby: 'サッカー' 
}
