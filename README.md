## YC Directory

A project that allows Entrepreneurs to introduce and pitch their Startups and connect with others easily 😀.

## Motivations

- Learn more about Next-JS 15 and its new features.
- Gaining experiences and discovering other technologies such as Sanity, Sentry, ...

## Getting started

When developing this project, I used `pnpm` as a package manager and re-created the project with my coding style, but some assets and code snippets were picked from the original repository that we can find [here](https://github.com/adrianhajdin/yc_directory).

- pnpm installation:

```bash
npm install -g pnpm
```

### 1 - Local development:

- We can clone the project by following this command:

```bash
git clone https://github.com/nirinasoa-herilanto/YC-Directory
```

- After cloning the project, please make sure that we are inside the project directory:

```bash
pnpm install // for installing project dependencies
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

### 2 - Env variables:

Please, create file `.env.local` inside the project root directory, then add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=

AUTH_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

```

PS: Some env variables will be added later 😉.

## Authentication with Next Auth

## Tech stacks

- Next-JS 15
- Next Auth
- Typescript
- Tailwind CSS
- Shadcn/UI
- Sanity
- Storybook

## Deployment N/A

## Author

Nirinasoa Herilanto

## Acknowledgments

- Thanks to `JS Mastery teams` for this learning project.
