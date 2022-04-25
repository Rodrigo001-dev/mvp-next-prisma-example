import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    // quando o usuario não estiver autenticado eu quero levar ele para onde(/)
    signIn: '/',
    // como não tenho tela de erro eu mando pra tela de login tambem
    error: '/'
  }
});