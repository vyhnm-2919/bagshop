import { ProductDTO } from "./product.dto"

export interface ColorDTO {
  id: string
  name: string
  value: String
  innerText: String
  products: ProductDTO[]
}
