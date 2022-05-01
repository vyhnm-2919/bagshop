import { ProductDTO } from "./product.dto"

export interface PriceRangeDTO {
  text: string
  price_gte: number | null
  price_lte: number | null
  unit: string
  id: string
  products: ProductDTO[]
}
