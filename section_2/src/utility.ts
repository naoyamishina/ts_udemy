type User = { 
  id: number; 
  name: string;
  age: number; 
  hobby: string; 
}

// nameとageだけの新しい型
type UserNameAndAgeType = Pick<User, 'name' | 'age'>

// 全てのプロパティに?がつく
type UserPartialType = Partial<User>
