import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';
import { icons } from 'lucide-react';
import HydrodactylLogo from '@/components/ui/HydrodactylLogo';
import BlueprintLogo from '@/components/ui/BlueprintLogo';
import ElytraLogo from '@/components/ui/ElytraLogo';

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      return
    }
    switch (icon) {
      case 'hydrodactyl':
        return HydrodactylLogo();
      case 'blueprint':
        return BlueprintLogo();
      case 'elytra':
        return ElytraLogo()
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

