// authReducer.js

const initialState = {
    isLoggedIn: false,
    user: null,
    // Diğer gerekli alanlar
  };

  
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload, // Kullanıcı bilgilerini payload'dan alabilirsiniz
        };
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      // Diğer durumlar için gereken case'ler
      default:
        return state;
    }
  };
  
  export default authReducer;
  