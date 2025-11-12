import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, linkItems } from '@/lib/layout.shared';
import { Footer } from '@/components/footer';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;
  const base = baseOptions(lang);

  return (
    <div className="flex min-h-screen flex-col">
      <HomeLayout
        {...base}
        links={[...(base.links || []), ...linkItems]}
        className="flex-1 dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)]"
      >
        {children}
      </HomeLayout>
      <Footer lang={lang} />
    </div>
  );
}
