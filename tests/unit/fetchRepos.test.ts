import { fetchRepos } from "../../src/api/api.mock";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          id: 580264321,
          node_id: "R_kgDOIpYhgQ",
          name: "ahikmah",
          full_name: "ahikmah/ahikmah",
          private: false,
          owner: {
            login: "ahikmah",
            id: 57889114,
            node_id: "MDQ6VXNlcjU3ODg5MTE0",
            avatar_url: "https://avatars.githubusercontent.com/u/57889114?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/ahikmah",
            html_url: "https://github.com/ahikmah",
            followers_url: "https://api.github.com/users/ahikmah/followers",
            following_url:
              "https://api.github.com/users/ahikmah/following{/other_user}",
            gists_url: "https://api.github.com/users/ahikmah/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/ahikmah/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/ahikmah/subscriptions",
            organizations_url: "https://api.github.com/users/ahikmah/orgs",
            repos_url: "https://api.github.com/users/ahikmah/repos",
            events_url: "https://api.github.com/users/ahikmah/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/ahikmah/received_events",
            type: "User",
            user_view_type: "public",
            site_admin: false,
          },
          html_url: "https://github.com/ahikmah/ahikmah",
          description: "Config files for my GitHub profile.",
          fork: false,
          url: "https://api.github.com/repos/ahikmah/ahikmah",
          forks_url: "https://api.github.com/repos/ahikmah/ahikmah/forks",
          keys_url:
            "https://api.github.com/repos/ahikmah/ahikmah/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/ahikmah/ahikmah/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/ahikmah/ahikmah/teams",
          hooks_url: "https://api.github.com/repos/ahikmah/ahikmah/hooks",
          issue_events_url:
            "https://api.github.com/repos/ahikmah/ahikmah/issues/events{/number}",
          events_url: "https://api.github.com/repos/ahikmah/ahikmah/events",
          assignees_url:
            "https://api.github.com/repos/ahikmah/ahikmah/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/ahikmah/ahikmah/branches{/branch}",
          tags_url: "https://api.github.com/repos/ahikmah/ahikmah/tags",
          blobs_url:
            "https://api.github.com/repos/ahikmah/ahikmah/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/ahikmah/ahikmah/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/ahikmah/ahikmah/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/ahikmah/ahikmah/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/ahikmah/ahikmah/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/ahikmah/ahikmah/languages",
          stargazers_url:
            "https://api.github.com/repos/ahikmah/ahikmah/stargazers",
          contributors_url:
            "https://api.github.com/repos/ahikmah/ahikmah/contributors",
          subscribers_url:
            "https://api.github.com/repos/ahikmah/ahikmah/subscribers",
          subscription_url:
            "https://api.github.com/repos/ahikmah/ahikmah/subscription",
          commits_url:
            "https://api.github.com/repos/ahikmah/ahikmah/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/ahikmah/ahikmah/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/ahikmah/ahikmah/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/ahikmah/ahikmah/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/ahikmah/ahikmah/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/ahikmah/ahikmah/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/ahikmah/ahikmah/merges",
          archive_url:
            "https://api.github.com/repos/ahikmah/ahikmah/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/ahikmah/ahikmah/downloads",
          issues_url:
            "https://api.github.com/repos/ahikmah/ahikmah/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/ahikmah/ahikmah/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/ahikmah/ahikmah/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/ahikmah/ahikmah/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/ahikmah/ahikmah/labels{/name}",
          releases_url:
            "https://api.github.com/repos/ahikmah/ahikmah/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/ahikmah/ahikmah/deployments",
          created_at: "2022-12-20T05:57:36Z",
          updated_at: "2022-12-20T05:57:36Z",
          pushed_at: "2023-06-30T13:55:07Z",
          git_url: "git://github.com/ahikmah/ahikmah.git",
          ssh_url: "git@github.com:ahikmah/ahikmah.git",
          clone_url: "https://github.com/ahikmah/ahikmah.git",
          svn_url: "https://github.com/ahikmah/ahikmah",
          homepage: "https://github.com/ahikmah",
          size: 5,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: ["config", "github-config"],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "master",
        },
        {
          id: 272547803,
          node_id: "MDEwOlJlcG9zaXRvcnkyNzI1NDc4MDM=",
          name: "ahikmah.github.io",
          full_name: "ahikmah/ahikmah.github.io",
          private: false,
          owner: {
            login: "ahikmah",
            id: 57889114,
            node_id: "MDQ6VXNlcjU3ODg5MTE0",
            avatar_url: "https://avatars.githubusercontent.com/u/57889114?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/ahikmah",
            html_url: "https://github.com/ahikmah",
            followers_url: "https://api.github.com/users/ahikmah/followers",
            following_url:
              "https://api.github.com/users/ahikmah/following{/other_user}",
            gists_url: "https://api.github.com/users/ahikmah/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/ahikmah/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/ahikmah/subscriptions",
            organizations_url: "https://api.github.com/users/ahikmah/orgs",
            repos_url: "https://api.github.com/users/ahikmah/repos",
            events_url: "https://api.github.com/users/ahikmah/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/ahikmah/received_events",
            type: "User",
            user_view_type: "public",
            site_admin: false,
          },
          html_url: "https://github.com/ahikmah/ahikmah.github.io",
          description: null,
          fork: false,
          url: "https://api.github.com/repos/ahikmah/ahikmah.github.io",
          forks_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/forks",
          keys_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/teams",
          hooks_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/hooks",
          issue_events_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/events",
          assignees_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/tags",
          blobs_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/languages",
          stargazers_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/stargazers",
          contributors_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/contributors",
          subscribers_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/subscribers",
          subscription_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/subscription",
          commits_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/merges",
          archive_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/downloads",
          issues_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/labels{/name}",
          releases_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/ahikmah/ahikmah.github.io/deployments",
          created_at: "2020-06-15T21:28:39Z",
          updated_at: "2021-07-01T10:38:07Z",
          pushed_at: "2021-05-31T16:34:38Z",
          git_url: "git://github.com/ahikmah/ahikmah.github.io.git",
          ssh_url: "git@github.com:ahikmah/ahikmah.github.io.git",
          clone_url: "https://github.com/ahikmah/ahikmah.github.io.git",
          svn_url: "https://github.com/ahikmah/ahikmah.github.io",
          homepage: null,
          size: 24333,
          stargazers_count: 0,
          watchers_count: 0,
          language: "JavaScript",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: true,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "master",
        },
        {
          id: 691510860,
          node_id: "R_kgDOKTeeTA",
          name: "aloka-prompt-ai",
          full_name: "ahikmah/aloka-prompt-ai",
          private: false,
          owner: {
            login: "ahikmah",
            id: 57889114,
            node_id: "MDQ6VXNlcjU3ODg5MTE0",
            avatar_url: "https://avatars.githubusercontent.com/u/57889114?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/ahikmah",
            html_url: "https://github.com/ahikmah",
            followers_url: "https://api.github.com/users/ahikmah/followers",
            following_url:
              "https://api.github.com/users/ahikmah/following{/other_user}",
            gists_url: "https://api.github.com/users/ahikmah/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/ahikmah/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/ahikmah/subscriptions",
            organizations_url: "https://api.github.com/users/ahikmah/orgs",
            repos_url: "https://api.github.com/users/ahikmah/repos",
            events_url: "https://api.github.com/users/ahikmah/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/ahikmah/received_events",
            type: "User",
            user_view_type: "public",
            site_admin: false,
          },
          html_url: "https://github.com/ahikmah/aloka-prompt-ai",
          description: null,
          fork: true,
          url: "https://api.github.com/repos/ahikmah/aloka-prompt-ai",
          forks_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/forks",
          keys_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/teams",
          hooks_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/hooks",
          issue_events_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/events",
          assignees_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/branches{/branch}",
          tags_url: "https://api.github.com/repos/ahikmah/aloka-prompt-ai/tags",
          blobs_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/languages",
          stargazers_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/stargazers",
          contributors_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/contributors",
          subscribers_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/subscribers",
          subscription_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/subscription",
          commits_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/merges",
          archive_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/downloads",
          issues_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/labels{/name}",
          releases_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/ahikmah/aloka-prompt-ai/deployments",
          created_at: "2023-09-14T10:24:58Z",
          updated_at: "2023-09-14T10:28:20Z",
          pushed_at: "2023-09-14T10:34:34Z",
          git_url: "git://github.com/ahikmah/aloka-prompt-ai.git",
          ssh_url: "git@github.com:ahikmah/aloka-prompt-ai.git",
          clone_url: "https://github.com/ahikmah/aloka-prompt-ai.git",
          svn_url: "https://github.com/ahikmah/aloka-prompt-ai",
          homepage: "https://aloka-prompt-ai.vercel.app",
          size: 275,
          stargazers_count: 0,
          watchers_count: 0,
          language: "JavaScript",
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "mit",
            name: "MIT License",
            spdx_id: "MIT",
            url: "https://api.github.com/licenses/mit",
            node_id: "MDc6TGljZW5zZTEz",
          },
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "master",
        },
        {
          id: 896445955,
          node_id: "R_kgDONW6uAw",
          name: "aloka-vision",
          full_name: "ahikmah/aloka-vision",
          private: false,
          owner: {
            login: "ahikmah",
            id: 57889114,
            node_id: "MDQ6VXNlcjU3ODg5MTE0",
            avatar_url: "https://avatars.githubusercontent.com/u/57889114?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/ahikmah",
            html_url: "https://github.com/ahikmah",
            followers_url: "https://api.github.com/users/ahikmah/followers",
            following_url:
              "https://api.github.com/users/ahikmah/following{/other_user}",
            gists_url: "https://api.github.com/users/ahikmah/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/ahikmah/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/ahikmah/subscriptions",
            organizations_url: "https://api.github.com/users/ahikmah/orgs",
            repos_url: "https://api.github.com/users/ahikmah/repos",
            events_url: "https://api.github.com/users/ahikmah/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/ahikmah/received_events",
            type: "User",
            user_view_type: "public",
            site_admin: false,
          },
          html_url: "https://github.com/ahikmah/aloka-vision",
          description:
            "Aloka Vision is an innovative attendance system that utilizes realtime face recognition technology. It employs pretrained models from InsightFace, a leading face analysis toolkit, to perform face detection and feature extraction from webcam or video file input.",
          fork: true,
          url: "https://api.github.com/repos/ahikmah/aloka-vision",
          forks_url: "https://api.github.com/repos/ahikmah/aloka-vision/forks",
          keys_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/ahikmah/aloka-vision/teams",
          hooks_url: "https://api.github.com/repos/ahikmah/aloka-vision/hooks",
          issue_events_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/events",
          assignees_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/branches{/branch}",
          tags_url: "https://api.github.com/repos/ahikmah/aloka-vision/tags",
          blobs_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/languages",
          stargazers_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/stargazers",
          contributors_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/contributors",
          subscribers_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/subscribers",
          subscription_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/subscription",
          commits_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/merges",
          archive_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/downloads",
          issues_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/labels{/name}",
          releases_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/ahikmah/aloka-vision/deployments",
          created_at: "2024-11-30T11:39:59Z",
          updated_at: "2024-11-30T11:39:59Z",
          pushed_at: "2023-07-24T01:15:52Z",
          git_url: "git://github.com/ahikmah/aloka-vision.git",
          ssh_url: "git@github.com:ahikmah/aloka-vision.git",
          clone_url: "https://github.com/ahikmah/aloka-vision.git",
          svn_url: "https://github.com/ahikmah/aloka-vision",
          homepage: "",
          size: 21296,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "main",
        },
        {
          id: 272321422,
          node_id: "MDEwOlJlcG9zaXRvcnkyNzIzMjE0MjI=",
          name: "Bemco",
          full_name: "ahikmah/Bemco",
          private: false,
          owner: {
            login: "ahikmah",
            id: 57889114,
            node_id: "MDQ6VXNlcjU3ODg5MTE0",
            avatar_url: "https://avatars.githubusercontent.com/u/57889114?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/ahikmah",
            html_url: "https://github.com/ahikmah",
            followers_url: "https://api.github.com/users/ahikmah/followers",
            following_url:
              "https://api.github.com/users/ahikmah/following{/other_user}",
            gists_url: "https://api.github.com/users/ahikmah/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/ahikmah/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/ahikmah/subscriptions",
            organizations_url: "https://api.github.com/users/ahikmah/orgs",
            repos_url: "https://api.github.com/users/ahikmah/repos",
            events_url: "https://api.github.com/users/ahikmah/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/ahikmah/received_events",
            type: "User",
            user_view_type: "public",
            site_admin: false,
          },
          html_url: "https://github.com/ahikmah/Bemco",
          description: "Game Bemco (Bersatu Melawan Corona)",
          fork: false,
          url: "https://api.github.com/repos/ahikmah/Bemco",
          forks_url: "https://api.github.com/repos/ahikmah/Bemco/forks",
          keys_url: "https://api.github.com/repos/ahikmah/Bemco/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/ahikmah/Bemco/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/ahikmah/Bemco/teams",
          hooks_url: "https://api.github.com/repos/ahikmah/Bemco/hooks",
          issue_events_url:
            "https://api.github.com/repos/ahikmah/Bemco/issues/events{/number}",
          events_url: "https://api.github.com/repos/ahikmah/Bemco/events",
          assignees_url:
            "https://api.github.com/repos/ahikmah/Bemco/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/ahikmah/Bemco/branches{/branch}",
          tags_url: "https://api.github.com/repos/ahikmah/Bemco/tags",
          blobs_url:
            "https://api.github.com/repos/ahikmah/Bemco/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/ahikmah/Bemco/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/ahikmah/Bemco/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/ahikmah/Bemco/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/ahikmah/Bemco/statuses/{sha}",
          languages_url: "https://api.github.com/repos/ahikmah/Bemco/languages",
          stargazers_url:
            "https://api.github.com/repos/ahikmah/Bemco/stargazers",
          contributors_url:
            "https://api.github.com/repos/ahikmah/Bemco/contributors",
          subscribers_url:
            "https://api.github.com/repos/ahikmah/Bemco/subscribers",
          subscription_url:
            "https://api.github.com/repos/ahikmah/Bemco/subscription",
          commits_url:
            "https://api.github.com/repos/ahikmah/Bemco/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/ahikmah/Bemco/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/ahikmah/Bemco/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/ahikmah/Bemco/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/ahikmah/Bemco/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/ahikmah/Bemco/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/ahikmah/Bemco/merges",
          archive_url:
            "https://api.github.com/repos/ahikmah/Bemco/{archive_format}{/ref}",
          downloads_url: "https://api.github.com/repos/ahikmah/Bemco/downloads",
          issues_url:
            "https://api.github.com/repos/ahikmah/Bemco/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/ahikmah/Bemco/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/ahikmah/Bemco/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/ahikmah/Bemco/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/ahikmah/Bemco/labels{/name}",
          releases_url:
            "https://api.github.com/repos/ahikmah/Bemco/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/ahikmah/Bemco/deployments",
          created_at: "2020-06-15T02:13:16Z",
          updated_at: "2020-07-28T15:53:11Z",
          pushed_at: "2020-07-28T15:53:08Z",
          git_url: "git://github.com/ahikmah/Bemco.git",
          ssh_url: "git@github.com:ahikmah/Bemco.git",
          clone_url: "https://github.com/ahikmah/Bemco.git",
          svn_url: "https://github.com/ahikmah/Bemco",
          homepage: "",
          size: 153455,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: "master",
        },
      ]),
    headers: {
      get: () => `https://api.github.com/user/ahikmah/repos?per_page=5&page=1`,
    },
  } as unknown as Response)
) as jest.Mock;

test("fetches repositories correctly", async () => {
  const result = await fetchRepos("ahikmah", 1);
  expect(result.repos).toHaveLength(5);
  expect(result.repos[0].name).toBe("ahikmah");
});
