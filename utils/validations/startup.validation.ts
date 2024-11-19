import { z } from 'zod';

export const startupFormSchema = z.object({
  title: z.string().min(5).max(120),
  description: z.string().min(20).max(500),
  category: z.string().min(2).max(50),
  image: z
    .string()
    .url()
    .refine(
      async (link: string) => {
        try {
          const res = await fetch(link, {
            method: 'HEAD',
          });

          const contentType = res.headers.get('content-type');

          return contentType?.startsWith('image/');
        } catch {
          return false;
        }
      },
      { message: 'Invalid image link 😃.' },
    ),
  pitch: z.string().min(50),
});
