// 一般的な関数
const funcTest = (int: number) : number => { 
  return int 
} 

console.log(funcTest(123))


// ジェネリクスを関数で使う
const genFunc1 = <T>(arg: T ) : T => { 
  return arg 
}

// 引数を指定する時に合わせて型も指定する 
console.log(genFunc1<number>(123)) 
console.log(genFunc1<string>('あああ'))
