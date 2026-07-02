'use client';

import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

export function GitHubStats() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    Promise.all([
      fetch('https://api.eva.pink/api/stars/blueprintframework/hydrodactyl').then(r => r.json()),
    ])
      .then(([repo1]) => {
        setStars((repo1.stars || 0));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 text-white/50">
      <StarIcon className="w-4 h-4 text-yellow-400" />
      <span className="font-semibold text-white">{stars !== null ? stars.toLocaleString() : '...'}</span>
      <span>stars on GitHub</span>
    </div>
  );
}

export default GitHubStats;
