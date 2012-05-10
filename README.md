# jquery-github-activity

This plugin renders the activity of github users as a list to a given element. It makes use of the [GitHub API v3](http://developer.github.com/v3).

## Requirements

* [jQuery 1.7.2](https://github.com/jquery/jquery)
* [jquery.timeago](https://github.com/rmm5t/jquery-timeago)

## Usage

$("textarea").githubActivityFor("username", {
    'limit': 10		// default and maximum is 30
});

## Events

see http://developer.github.com/v3/events/types/

### Supported

* CreateEvent
* FollowEvent
* PushEvent
* WatchEvent
* IssueCommentEvent
* IssuesEvent
* CommitCommentEvent
* PullRequestEvent
* DeleteEvent
* ForkEvent

### Not yet supported

* DownloadEvent
* ForkApplyEvent
* GistEvent
* GollumEvent
* MemberEvent
* PublicEvent
* PullRequestReviewCommentEvent
* TeamAddEvent

## Todo

* additional options to the github-activity function
  * limit number of rendered events
  * define custom renderers
	