import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  it('should handle login correctly', async () => {
    const { getByLabelText, getByText } = render(<Login />);

    // Kullanıcı adı ve şifre alanlarına değer girme
    const usernameInput = getByLabelText('Kullanıcı adı');
    const passwordInput = getByLabelText('Şifre');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    // Giriş butonuna tıklama
    fireEvent.click(getByText('Giriş Yap'));

    // API isteği için bekleyin
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': expect.any(String), // Authorization token kontrolü
        },
        body: JSON.stringify({
          username: 'testuser',
          password: 'testpassword',
        }),
      });
    });

    // Başarılı giriş durumunu kontrol etme
    expect(window.location.pathname).toEqual('/Profiles');
  });
});
