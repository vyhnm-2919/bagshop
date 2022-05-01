import { ActionTree } from 'vuex';
import { ProductState } from '~/models/interfaces/state/product.state';
import { RootState } from '~/models/interfaces/state/root.state';

export const actions: ActionTree<ProductState, RootState> = {
  setPerformanceOfProduct({ commit }, value: Boolean): void {
    commit('setPerformanceOfProduct', value);
  },

};

export default actions;
