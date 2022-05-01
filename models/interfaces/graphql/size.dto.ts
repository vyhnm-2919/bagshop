import { ProductDTO } from "./product.dto"

export interface SizeDTO {
  id: string
  text: string
  value: string
  products: ProductDTO[]
}
