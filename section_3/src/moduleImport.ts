// export defaultの方は {} が不要
// as で別名を指定可能 (極力使わない)
import User from './moduleExportD'
import { UserType, BlogType as Blog } from './moduleExport'

const user : UserType = { 
  id: 1, 
  name: '柴崎'
} 

const user2 : User = { 
  id: 1, 
  name: '山田'
}

const blog : Blog = { 
  id: 1, 
  content: 'テスト投稿'
}

console.log(user, user2, blog)
