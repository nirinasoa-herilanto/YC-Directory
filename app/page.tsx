import { Card } from "@project/components/atoms";

import { ToggleThemeButton } from "@project/components/molecules";

export default function page() {
  return (
    <main className="m-4">
      <div className="absolute z-50 top-4 right-6">
        <ToggleThemeButton />
      </div>

      <section className="mt-20 flex justify-center md:mt-10">
        <Card className="p-4">
          <h1 className="text-3xl mb-4">👋 Welcome to YC Directory</h1>
          <p>Picth your Startup, connect with Entrepreneurs...</p>
        </Card>
      </section>
    </main>
  );
}
