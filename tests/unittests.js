QUnit.test( "userLinkTest", function( assert ) {
    var user = {
      "login": "baxterthehacker",
      "id": 6752317,
      "avatar_url": "https://avatars.githubusercontent.com/u/6752317?v=2",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baxterthehacker",
      "html_url": "https://github.com/baxterthehacker",
      "followers_url": "https://api.github.com/users/baxterthehacker/followers",
      "following_url": "https://api.github.com/users/baxterthehacker/following{/other_user}",
      "gists_url": "https://api.github.com/users/baxterthehacker/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/baxterthehacker/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/baxterthehacker/subscriptions",
      "organizations_url": "https://api.github.com/users/baxterthehacker/orgs",
      "repos_url": "https://api.github.com/users/baxterthehacker/repos",
      "events_url": "https://api.github.com/users/baxterthehacker/events{/privacy}",
      "received_events_url": "https://api.github.com/users/baxterthehacker/received_events",
      "type": "User",
      "site_admin": false
    };
    assert.deepEqual( userLink(user), $('<a>', {
                                    text: 'baxterthehacker',
                                    href: 'https://github.com/baxterthehacker'
                                }));
});

QUnit.test("repositoryLinkTest", function( assert ) {
    var repo = {
        "id": 20000106,
        "name": "public-repo",
        "full_name": "baxterthehacker/public-repo",
        "owner": {
          "login": "baxterthehacker",
          "id": 6752317,
          "avatar_url": "https://avatars.githubusercontent.com/u/6752317?v=2",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baxterthehacker",
          "html_url": "https://github.com/baxterthehacker",
          "followers_url": "https://api.github.com/users/baxterthehacker/followers",
          "following_url": "https://api.github.com/users/baxterthehacker/following{/other_user}",
          "gists_url": "https://api.github.com/users/baxterthehacker/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baxterthehacker/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baxterthehacker/subscriptions",
          "organizations_url": "https://api.github.com/users/baxterthehacker/orgs",
          "repos_url": "https://api.github.com/users/baxterthehacker/repos",
          "events_url": "https://api.github.com/users/baxterthehacker/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baxterthehacker/received_events",
          "type": "User",
          "site_admin": false
        }};
    assert.deepEqual( repositoryLink(repo), $('<a>', {
                                            text: 'public-repo',
                                            href: 'https://github.com/baxterthehacker/public-repo'
                                        }));
});

QUnit.test("branchNameTest", function( assert ) {
    assert.equal(branchName('refs/heads/gh-pages'), 'gh-pages')
})

QUnit.test("issueLinkTest", function( assert ) {
    var issue = {
    "url": "https://api.github.com/repos/baxterthehacker/public-repo/issues/51",
    "labels_url": "https://api.github.com/repos/baxterthehacker/public-repo/issues/51/labels{/name}",
    "comments_url": "https://api.github.com/repos/baxterthehacker/public-repo/issues/51/comments",
    "events_url": "https://api.github.com/repos/baxterthehacker/public-repo/issues/51/events",
    "html_url": "https://github.com/baxterthehacker/public-repo/issues/51",
    "id": 45432786,
    "number": 51,
    "title": "Spelling error in the README file",
    "user": {
      "login": "baxterthehacker",
      "id": 6752317,
      "avatar_url": "https://avatars.githubusercontent.com/u/6752317?v=2",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baxterthehacker",
      "html_url": "https://github.com/baxterthehacker",
      "followers_url": "https://api.github.com/users/baxterthehacker/followers",
      "following_url": "https://api.github.com/users/baxterthehacker/following{/other_user}",
      "gists_url": "https://api.github.com/users/baxterthehacker/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/baxterthehacker/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/baxterthehacker/subscriptions",
      "organizations_url": "https://api.github.com/users/baxterthehacker/orgs",
      "repos_url": "https://api.github.com/users/baxterthehacker/repos",
      "events_url": "https://api.github.com/users/baxterthehacker/events{/privacy}",
      "received_events_url": "https://api.github.com/users/baxterthehacker/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/baxterthehacker/public-repo/labels/bug",
        "name": "bug",
        "color": "fc2929"
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "milestone": null,
    "comments": 1,
    "created_at": "2014-10-10T00:09:51Z",
    "updated_at": "2014-10-10T00:09:51Z",
    "closed_at": null,
    "body": "It looks like you accidently spelled 'commit' with two 't's."
  };
  assert.deepEqual(issueLink(issue), $('<a>', {
                                            text: 'issue 51',
                                            href: 'https://github.com/baxterthehacker/public-repo/issues/51'
                                        }));
});

QUnit.test("pullRequestLinkTest", function( assert ) {
    var pullRequest = {
        "url": "https://api.github.com/repos/baxterthehacker/public-repo/pulls/50",
        "id": 22532849,
        "html_url": "https://github.com/baxterthehacker/public-repo/pull/50",
        "diff_url": "https://github.com/baxterthehacker/public-repo/pull/50.diff",
        "patch_url": "https://github.com/baxterthehacker/public-repo/pull/50.patch",
        "issue_url": "https://api.github.com/repos/baxterthehacker/public-repo/issues/50",
        "number": 50,
        "state": "open",
        "locked": false,
        "title": "Update the README with new information",
        "user": {
          "login": "baxterthehacker",
          "id": 6752317,
          "avatar_url": "https://avatars.githubusercontent.com/u/6752317?v=2",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baxterthehacker",
          "html_url": "https://github.com/baxterthehacker",
          "followers_url": "https://api.github.com/users/baxterthehacker/followers",
          "following_url": "https://api.github.com/users/baxterthehacker/following{/other_user}",
          "gists_url": "https://api.github.com/users/baxterthehacker/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baxterthehacker/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baxterthehacker/subscriptions",
          "organizations_url": "https://api.github.com/users/baxterthehacker/orgs",
          "repos_url": "https://api.github.com/users/baxterthehacker/repos",
          "events_url": "https://api.github.com/users/baxterthehacker/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baxterthehacker/received_events",
          "type": "User",
          "site_admin": false
      }};
    var comment = {
        "url": "https://api.github.com/repos/baxterthehacker/public-repo/pulls/comments/18682909",
        "id": 18682909,
        "diff_hunk": "@@ -1,2 +1,4 @@\n public-repo",
        "path": "README.md",
        "position": 1,
        "original_position": 1,
        "commit_id": "05c588ba8cd510ecbe112d020f215facb17817a6",
        "original_commit_id": "05c588ba8cd510ecbe112d020f215facb17817a6",
        "user": {
          "login": "baxterthehacker",
          "id": 6752317,
          "avatar_url": "https://avatars.githubusercontent.com/u/6752317?v=2",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baxterthehacker",
          "html_url": "https://github.com/baxterthehacker",
          "followers_url": "https://api.github.com/users/baxterthehacker/followers",
          "following_url": "https://api.github.com/users/baxterthehacker/following{/other_user}",
          "gists_url": "https://api.github.com/users/baxterthehacker/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baxterthehacker/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baxterthehacker/subscriptions",
          "organizations_url": "https://api.github.com/users/baxterthehacker/orgs",
          "repos_url": "https://api.github.com/users/baxterthehacker/repos",
          "events_url": "https://api.github.com/users/baxterthehacker/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baxterthehacker/received_events",
          "type": "User",
          "site_admin": false
      }};
    assert.deepEqual(pullRequestLink(pullRequest, undefined), $('<a>', {
                                                                text: 'pull request 50',
                                                                href: 'https://github.com/baxterthehacker/public-repo/pull/50'}));
    assert.deepEqual(pullRequestLink(pullRequest, comment), $('<a>', {
                                                                text: 'pull request 50',
                                                                href: 'https://github.com/baxterthehacker/public-repo/pull/50#issuecomment-18682909'}));
});

QUnit.test("tagTest", function( assert ) {
    var release = {
  "ref": "0.0.1",
  "ref_type": "tag",
  "master_branch": "master",
  "description": "",
  "pusher_type": "user",
  "repository": {
    "id": 20000106,
    "name": "public-repo",
    "full_name": "baxterthehacker/public-repo",
    "owner": {
      "login": "baxterthehacker",
      "id": 6752317,
      "avatar_url": "https://avatars.githubusercontent.com/u/6752317?v=2",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baxterthehacker",
      "html_url": "https://github.com/baxterthehacker",
      "followers_url": "https://api.github.com/users/baxterthehacker/followers",
      "following_url": "https://api.github.com/users/baxterthehacker/following{/other_user}",
      "gists_url": "https://api.github.com/users/baxterthehacker/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/baxterthehacker/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/baxterthehacker/subscriptions",
      "organizations_url": "https://api.github.com/users/baxterthehacker/orgs",
      "repos_url": "https://api.github.com/users/baxterthehacker/repos",
      "events_url": "https://api.github.com/users/baxterthehacker/events{/privacy}",
      "received_events_url": "https://api.github.com/users/baxterthehacker/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/baxterthehacker/public-repo",
    "description": "",
    "fork": false,
    "url": "https://api.github.com/repos/baxterthehacker/public-repo",
    "forks_url": "https://api.github.com/repos/baxterthehacker/public-repo/forks",
    "keys_url": "https://api.github.com/repos/baxterthehacker/public-repo/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/baxterthehacker/public-repo/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/baxterthehacker/public-repo/teams",
    "hooks_url": "https://api.github.com/repos/baxterthehacker/public-repo/hooks",
    "issue_events_url": "https://api.github.com/repos/baxterthehacker/public-repo/issues/events{/number}",
    "events_url": "https://api.github.com/repos/baxterthehacker/public-repo/events",
    "assignees_url": "https://api.github.com/repos/baxterthehacker/public-repo/assignees{/user}",
    "branches_url": "https://api.github.com/repos/baxterthehacker/public-repo/branches{/branch}",
    "tags_url": "https://api.github.com/repos/baxterthehacker/public-repo/tags",
    "blobs_url": "https://api.github.com/repos/baxterthehacker/public-repo/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/baxterthehacker/public-repo/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/baxterthehacker/public-repo/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/baxterthehacker/public-repo/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/baxterthehacker/public-repo/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/baxterthehacker/public-repo/languages",
    "stargazers_url": "https://api.github.com/repos/baxterthehacker/public-repo/stargazers",
    "contributors_url": "https://api.github.com/repos/baxterthehacker/public-repo/contributors",
    "subscribers_url": "https://api.github.com/repos/baxterthehacker/public-repo/subscribers",
    "subscription_url": "https://api.github.com/repos/baxterthehacker/public-repo/subscription",
    "commits_url": "https://api.github.com/repos/baxterthehacker/public-repo/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/baxterthehacker/public-repo/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/baxterthehacker/public-repo/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/baxterthehacker/public-repo/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/baxterthehacker/public-repo/contents/{+path}",
    "compare_url": "https://api.github.com/repos/baxterthehacker/public-repo/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/baxterthehacker/public-repo/merges",
    "archive_url": "https://api.github.com/repos/baxterthehacker/public-repo/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/baxterthehacker/public-repo/downloads",
    "issues_url": "https://api.github.com/repos/baxterthehacker/public-repo/issues{/number}",
    "pulls_url": "https://api.github.com/repos/baxterthehacker/public-repo/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/baxterthehacker/public-repo/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/baxterthehacker/public-repo/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/baxterthehacker/public-repo/labels{/name}",
    "releases_url": "https://api.github.com/repos/baxterthehacker/public-repo/releases{/id}",
    "created_at": "2014-05-20T22:39:43Z",
    "updated_at": "2014-10-10T00:09:53Z",
    "pushed_at": "2014-10-10T00:10:02Z",
    "git_url": "git://github.com/baxterthehacker/public-repo.git",
    "ssh_url": "git@github.com:baxterthehacker/public-repo.git",
    "clone_url": "https://github.com/baxterthehacker/public-repo.git",
    "svn_url": "https://github.com/baxterthehacker/public-repo",
    "homepage": null,
    "size": 665,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 26,
    "forks": 0,
    "open_issues": 26,
    "watchers": 0,
    "default_branch": "master"
  },
  "sender": {
    "login": "baxterthehacker",
    "id": 6752317,
    "avatar_url": "https://avatars.githubusercontent.com/u/6752317?v=2",
    "gravatar_id": "",
    "url": "https://api.github.com/users/baxterthehacker",
    "html_url": "https://github.com/baxterthehacker",
    "followers_url": "https://api.github.com/users/baxterthehacker/followers",
    "following_url": "https://api.github.com/users/baxterthehacker/following{/other_user}",
    "gists_url": "https://api.github.com/users/baxterthehacker/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/baxterthehacker/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/baxterthehacker/subscriptions",
    "organizations_url": "https://api.github.com/users/baxterthehacker/orgs",
    "repos_url": "https://api.github.com/users/baxterthehacker/repos",
    "events_url": "https://api.github.com/users/baxterthehacker/events{/privacy}",
    "received_events_url": "https://api.github.com/users/baxterthehacker/received_events",
    "type": "User",
    "site_admin": false
      }
    };
    assert.deepEqual(tag(release), $('<b>', {
                                    text: '0.0.1'
                                }));
});

QUnit.test("releaseNameTest", function( assert ) {
    var release = {
    "url": "https://api.github.com/repos/baxterthehacker/public-repo/releases/616452",
    "assets_url": "https://api.github.com/repos/baxterthehacker/public-repo/releases/616452/assets",
    "upload_url": "https://uploads.github.com/repos/baxterthehacker/public-repo/releases/616452/assets{?name}",
    "html_url": "https://github.com/baxterthehacker/public-repo/releases/tag/0.0.1",
    "id": 616452,
    "tag_name": "0.0.1",
    "target_commitish": "master",
    "name": "sweetrelease",
    "draft": false,
    "author": {
      "login": "baxterthehacker",
      "id": 6752317,
      "avatar_url": "https://avatars.githubusercontent.com/u/6752317?v=2",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baxterthehacker",
      "html_url": "https://github.com/baxterthehacker",
      "followers_url": "https://api.github.com/users/baxterthehacker/followers",
      "following_url": "https://api.github.com/users/baxterthehacker/following{/other_user}",
      "gists_url": "https://api.github.com/users/baxterthehacker/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/baxterthehacker/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/baxterthehacker/subscriptions",
      "organizations_url": "https://api.github.com/users/baxterthehacker/orgs",
      "repos_url": "https://api.github.com/users/baxterthehacker/repos",
      "events_url": "https://api.github.com/users/baxterthehacker/events{/privacy}",
      "received_events_url": "https://api.github.com/users/baxterthehacker/received_events",
      "type": "User",
      "site_admin": false
    },
    "prerelease": false,
    "created_at": "2014-05-20T22:26:15Z",
    "published_at": "2014-10-10T00:10:02Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/baxterthehacker/public-repo/tarball/0.0.1",
    "zipball_url": "https://api.github.com/repos/baxterthehacker/public-repo/zipball/0.0.1",
    "body": null
    };
    assert.deepEqual(releaseName(release), $('<a>', {
                                            text: 'sweetrelease',
                                            href: 'https://github.com/baxterthehacker/public-repo/releases/tag/0.0.1'}))
});

// QUnit.test("createEventActionTest", function( assert ) {

// })

// QUnit.test("followEventActionTest", function( assert ) {

// })

// QUnit.test("watchEventActionTest", function( assert ) {

// })

// QUnit.test("pushEventActionTest", function( assert ) {

// })

// QUnit.test("issueEventActionTest", function( assert ) {

// })

// QUnit.test("pullEventActionTest", function( assert ) {

// })

// QUnit.test("deleteEventActionTest", function( assert ) {

// })

// QUnit.test("commitEventActionTest", function( assert ) {

// })

// QUnit.test("issueEventActionTest", function( assert ) {

// })

// QUnit.test("forkEventActionTest", function( assert ) {

// })

// QUnit.test("releaseEventActionTest", function( assert ) {

// })

// QUnit.test("gollumEventActionTest", function( assert ) {

// })

// QUnit.test("memberEventActionTest", function( assert ) {

// })
