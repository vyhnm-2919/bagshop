import { ProductDTO } from "./product.dto"

export interface CategoryDTO {
  id: string
  categoryName: string
  products: ProductDTO[]
  pro?: boolean
}
