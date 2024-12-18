## YC Directory

A project that allows Entrepreneurs to introduce and pitch their Startups and connect with others easily 😀.

## Motivations

- Learn more about Next-JS 15 and its new features.
- Gaining experiences and discovering other technologies such as Sanity, Sentry, ...

## Getting started

#### 1) YC Directory app

When developing this project, I used `pnpm` as a package manager and re-created the project with my coding style, but some assets and code snippets were picked from the original repository that we can find [here](https://github.com/adrianhajdin/yc_directory).

- pnpm installation:

```bash
npm install -g pnpm
```

##### 1 - Local development:

- We can clone the project by following this command:

```bash
git clone https://github.com/nirinasoa-herilanto/YC-Directory
```

- After cloning the project, please make sure that we are inside the project directory:

```bash
pnpm install // for installing project dependencies
```

- Before running the local dev, please run the following command to update our Next project (i.e. use the canary version of NextJS) to stay updated and to avoid some bugs that broke the app:

```bash
pnpm next:canary // will update the project with the latest version
```

- For running the project in local development:

```bash
pnpm dev
```

We can see the project on the browser at [http://localhost:3000/](http://localhost:3000/)

- For running Storybook:

```bash
pnpm storybook
```

We can see the project stories on the browser at [http://localhost:6006/](http://localhost:6006/)

##### 2 - Env variables:

Please, create file `.env.local` inside the project root directory, then add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=

AUTH_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="vX" // latest version

SANITY_SECRET_TOKEN= // allows us to create and update Startup

```

PS: Some env variables will be added later 😉.

#### B) Sanity - YC Directory

##### 1 - Sanity Typegen

May be in the future, we want to add another data(ex: reviews, ...), and to generate types for those schemas, please use this guide bellow:

- First, we need to extract our new schema

```bash
pnpm sanity:extract

// after running this command, we get a message like this:
// ✅ Extracted schema to D:\projects\yc-directory\project\schema.json

```

- Then, we can generate and get an updated typegen from those schema

```bash
pnpm sanity:typegen

after running this command, we get a message like this:
// ✅ Generated TypeScript types for 15 schema types and 0 GROQ queries in 0 files into: ./sanity/types.ts

```

For more information about `Sanity typegen`, we can check the official docs at this [link](https://www.sanity.io/docs/sanity-typegen).

## Authentication with Next Auth

## Tech stacks

- Next-JS 15
- Next Auth
- Typescript
- Tailwind CSS
- Shadcn/UI
- Sanity
- Storybook

## Deployment

The project is available on this [link](https://nhr-yc-directory.vercel.app/), and 30 days left with Sanity.

Have fun 😃.

## Author

Nirinasoa Herilanto

## Acknowledgments

- Thanks to `JS Mastery teams` for this learning project.
