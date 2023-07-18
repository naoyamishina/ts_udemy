// 型の制約
type GenObjectE<T extends number | string> = { 
  sample: T 
} 

const testObjE: GenObjectE<string> = { 
  sample: 'ああ'
}

// デフォルトの型
type GenObjectD<T = string> = { 
  sample: T 
}

const testObjD: GenObjectD = { 
  sample: 'ああ'
} //stringなら<>不要 

const testObjDnum: GenObjectE<number> = { 
  sample: 123 
}
