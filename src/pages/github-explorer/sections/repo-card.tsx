import React from "react";

import { Iconify } from "src/components/iconify";

import { Repository } from "src/types/repo";

interface RepoCardProps {
  repo: Repository;
}

export const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <div className="p-3 bg-slate-300 dark:bg-slate-800 text-dark-background dark:text-white mb-2 rounded">
      <div className="flex justify-between items-start gap-x-10">
        <div className="flex flex-col gap-y-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] font-bold"
          >
            {repo.name}
          </a>
          <div className="text-xs text-muted-foreground">
            {repo.description || ""}
          </div>
        </div>
        <div className="flex items-end">
          <span className="font-semibold">{repo.stargazers_count}</span>
          <Iconify icon="tabler:star-filled" size={16} className="ml-2" />
        </div>
      </div>
    </div>
  );
};
