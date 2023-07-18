const MemberAC = { 
  name: 'あああ',
  age: 30
} as const

// 書き換えしようとするとエラー 
// MemberAC.name = '山田'

// 配列
const arrayAC = ['aaa', 'bbb'] as const 

// arrayAC.push('ccc') // エラー
