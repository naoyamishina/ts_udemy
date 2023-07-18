type ObjectG = { 
  id: number, 
  name: string
}

// 関数定義時 引数の型に制約をかける
const funcG = <T extends ObjectG>(arg: T) : void => {
  console.log(arg)
}

// 関数を使う時 型を指定 
funcG<ObjectG>({id: 123, name: 'あああ'})
