// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    id: string;
  }

  interface JWT {
    id: string;
  }
}
