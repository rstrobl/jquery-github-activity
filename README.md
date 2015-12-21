# jquery-github-activity

This plugin renders the activity of github users as a list to a given element. It makes use of the [GitHub API v3](http://developer.github.com/v3).

## Requirements

* [jQuery 1.7.2](https://github.com/jquery/jquery)
* [jquery.timeago](https://github.com/rmm5t/jquery-timeago)
* [QUnit](http://qunitjs.com/)

## Usage

```javascript
$("#gh-activity").githubActivityFor("username", {
    'limit': 10,                // limit number of event, default: 30 (max)
    'wrap': function(item) {	// post process item element, default: identity
        return item
    }
})
```

## Events

see https://developer.github.com/v3/activity/events/types

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
* ReleaseEvent
* GollumEvent
* MemberEvent
* PublicEvent

### Not yet supported

* PullRequestReviewCommentEvent
* TeamAddEvent

## Todo

* additional options to the github-activity function
  * define custom renderers
  * implement remaining events
  * support for detailed events
* finish unit tests implementation
	
