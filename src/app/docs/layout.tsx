import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { GithubInfoClient } from '@/components/ui/GithubInfoClient';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions}
      tree={source.pageTree}
      disableThemeSwitch
      links={[
        {
          type: 'custom',
          children: (
            <GithubInfoClient
              owner="blueprintframework"
              repo="hydrodactyl"
              className="lg:-mx-2"
            />
          ),
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
