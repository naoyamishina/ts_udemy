// 型を仮置きしておいて、使う時に型を決める 
type GenObject<T, U> = {
  name: string,
  age: number,
  memo: T, 
  value: U 
}

const soccerMember: GenObject<string, number> = { 
  name: '三苫', 
  age: 18,
  memo: 
  'W杯ありがとう', 
  value: 123
}

const basketMember: GenObject<number, string> = {
  name: '桜木', 
  age: 18,
  memo: 123, 
  value: '映画最高' 
}
