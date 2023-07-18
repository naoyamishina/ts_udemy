const SIZE = { 
  SMALL : '小', 
  MEDIUM : '中', 
  LARGE : '大' 
} as const;

type SizeType = keyof typeof SIZE; // keyユニオン型で

const sizeCheck = (size: SizeType) => console.log(size) // 引数にtype型 
  
sizeCheck("SMALL") 
// sizeCheck("XL") // エラー

type ValueOfSize = typeof SIZE[keyof typeof SIZE] // valueユニオン型
