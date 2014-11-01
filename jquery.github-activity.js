var githubURL = 'https://github.com/'

function userLink(user) {
	return $('<a>', {
		text: user.login,
		href: githubURL + user.login
	})
}

function repositoryLink(repo) {
	return $('<a>', {
		text: repo.name,
		href: githubURL + repo.full_name
	})
}

function branchName(ref) {
	return ref.split('refs/heads/')[1]
}

function issueLink(issue) {
	return $('<a>', {
		text: 'issue ' + issue.number,
		href: issue.html_url
	})
}

function pullRequestLink(pull_request, comment) {
	var url = pull_request.html_url

	if(typeof comment !== 'undefined') {
		url += '#issuecomment-' + comment.id
	}

	return $('<a>', {
		text: 'pull request ' + pull_request.number,
		href: url
	})
}

function tag(payload) {
	return $('<b>', {
		text: payload.ref,
	})
}

function releaseName(release) {
	return $('<a>', {
		text: release.name,
		href: release.html_url
	})
}

function createEventAction(event) {
	if(event.payload.ref_type != 'tag')
		return  'created respository ' + repositoryLink(event.repo).prop('outerHTML')
	else
		return 'created tag ' + tag(event.payload).prop('outerHTML') + ' in ' + repositoryLink(event.repo).prop('outerHTML')
}

function followEventAction(event) {
	return 'started following ' + userLink(event.payload.target).prop('outerHTML')
}

function watchEventAction(event) {
	return event.payload.action + ' watching ' + repositoryLink(event.repo).prop('outerHTML')
}

function pushEventAction(event) {
	return 'pushed to ' + branchName(event.payload.ref) + ' at ' + repositoryLink(event.repo).prop('outerHTML')
}

function issueCommentEventAction(event) {
	return 'commented on ' + issueLink(event.payload.issue, event.payload.comment).prop('outerHTML') + ' on ' + repositoryLink(event.repo).prop('outerHTML')
}

function pullRequestEventAction(event) {
	return 'opened ' + pullRequestLink(event.payload.pull_request).prop('outerHTML') + ' on ' + repositoryLink(event.repo).prop('outerHTML')
}

function deleteEventAction(event) {
	return 'deleted ' + event.payload.ref_type + ' ' + event.payload.ref + ' at ' + repositoryLink(event.repo).prop('outerHTML')
}

function commitCommentEventAction(event) {
	return 'commented on ' + repositoryLink(event.repo).prop('outerHTML')
}

function issueEventAction(event) {
	return 'opened ' + issueLink(event.payload.issue).prop('outerHTML') + ' on ' + repositoryLink(event.repo).prop('outerHTML')
}

function forkEventAction(event) {
	return 'forked ' + repositoryLink(event.repo).prop('outerHTML')
}

function releaseEventAction(event) {
	return 'created release ' + releaseName(event.payload.release).prop('outerHTML') + ' on ' + repositoryLink(event.repo).prop('outerHTML')
}

function gollumEventAction(event) {
	return 'updated wiki of repository ' + repositoryLink(event.repository).prop('outerHTML')
}

function memberEventAction(event) {
	return event.action + ' ' + userLink(event.member) + ' to ' + repositoryLink(event.repository)
}

(function($) {
	$.fn.githubActivityFor = function(username, params) {
		var githubURL = 'https://github.com/'
		var params = params || {}

		if('wrap' in params == false) {
			params['wrap'] = function(item) { return item }
		}

		var renderer = {
			'CreateEvent': function(event) {
				if(event.payload.ref_type != 'tag')
					return  'created respository ' + repositoryLink(event.repo).prop('outerHTML')
				else
					return 'created tag ' + tag(event.payload).prop('outerHTML') + ' in ' + repositoryLink(event.repo).prop('outerHTML')
			},
			'FollowEvent': followEventAction,
			'WatchEvent': watchEventAction,
			'PushEvent': pushEventAction,
			'IssueCommentEvent': issueEventAction,
			'PullRequestEvent': pullRequestEventAction,
			'DeleteEvent': deleteEventAction,
			'CommitCommentEvent': commitCommentEventAction,
			'IssuesEvent': issueCommentEventAction,
			'ForkEvent': forkEventAction,
			'ReleaseEvent': releaseEventAction,
			'GollumEvent': gollumEventAction,
			'MemberEvent': memberEventAction
		}

		this.each(function() {
			var el = $(this)

			$.get('https://api.github.com/users/' + username + '/events?callback=?', function(activity) {
				$.each(activity.data, function(index, event) {
					if('limit' in params && index == params['limit']) {
						return false
					}

					if(event.type in renderer) {
						el.append(params.wrap($('<li>', {
							html: userLink(event.actor).prop('outerHTML') + ' ' + renderer[event.type](event) + ' ' + jQuery.timeago(new Date(event.created_at))
						})))
					}
					else {
						console.log('No renderer for ' + event.type + ' implemented.')
						console.log(event)
					}
				})
			}, "json")
		})
	}
})(jQuery)
