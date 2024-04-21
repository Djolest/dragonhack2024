import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  async login(req, res) {
    return await handleLogin(req, res, {
      returnTo: "/enter",
    });
  },
});