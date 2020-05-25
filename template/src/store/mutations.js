export default {
  setUserInfo(state, data) {
    const { userId: user_id, oaId: oa_id, userName: user_name } = data || {};
    state.user_info.user_id = user_id;
    state.user_info.oa_id = oa_id;
    state.user_info.user_name = user_name;
  }
}
