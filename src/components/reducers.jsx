const initialState = {
  username: '',
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      // Kullanıcı adını güncelle
      return { ...state, username: action.payload };
    case 'SET_LOGGED_IN':
      // Giriş durumunu (isLoggedIn) güncelle
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

export default userReducer;
