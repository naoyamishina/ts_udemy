type MemberType = { 
  name: string,
  age: number
}

const memberT: MemberType = { 
  name: "三苫",
  age: 30
}

console.log(memberT)

type MemberHobby = {
  hobby: string 
}

type MemberProfile = MemberType & MemberHobby

const memberInfo: MemberProfile = { 
  name: 'ああ', 
  age: 1, 
  hobby: 'サッカー'
}

console.log(memberInfo)
