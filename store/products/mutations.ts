import { Vue } from 'nuxt-property-decorator'
import { MutationTree } from 'vuex'
import { ProductState } from '~/models/interfaces/state/product.state'

export const mutations: MutationTree<ProductState> = {
  setPerformanceOfProduct(state: ProductState, value: Boolean): void {
    state.isGrid = value
  }
}

export default mutations
