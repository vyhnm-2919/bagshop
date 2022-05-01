import { CategoryDTO } from './category.dto'
import { ColorDTO } from './color.dto'
import { UserDTO } from './user.dto'
import { SizeDTO } from './size.dto'
import { PriceRangeDTO } from './pricarange.dto'

export interface ProductDTO {
  name: string
  id: string
  description: string
  color: ColorDTO
  size: SizeDTO
  image: Array<string>
  reviews: Array<Object>
  ratings: number | null
  category: CategoryDTO
  user: UserDTO
  price_range: PriceRangeDTO
  price: number | null
}
