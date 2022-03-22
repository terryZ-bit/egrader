import Vue from 'vue';
import Vuex from 'vuex';
import state from "@/store/state";
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})