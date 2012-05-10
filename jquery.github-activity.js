(function($) {
	$.fn.githubActivityFor = function(username) {
		var githubURL = 'https://github.com/'
	
		var userLink = function(user) {
			return $('<a>', {
			    text: user.login,
			    href: githubURL + user.login
			})
		}

		var repositoryLink = function(repo) {
			var repositoryName = repo.name.split('/')[1];
			
			return $('<a>', {
			    text: repositoryName,
			    href: githubURL + repo.name
			})
		}
		
		var branchName = function(ref) {
			return ref.split('refs/heads/')[1]
		}
		
		this.each(function() {
			var el = $(this)
			
			var handler = {
				'CreateEvent': function(event) {
					return  'created respository ' + repositoryLink(event.repo).prop('outerHTML')
				},
				'FollowEvent': function(event) {
					return 'started following ' + userLink(event.payload.target).prop('outerHTML')
				},
				'WatchEvent': function(event) {
					return event.payload.action + ' watching ' + repositoryLink(event.repo).prop('outerHTML')
				},
				'PushEvent': function(event) {
					return 'pushed to ' + branchName(event.payload.ref) + ' at ' + repositoryLink(event.repo).prop('outerHTML')
				}				
			}

			$.get('https://api.github.com/users/' + username + '/events?callback=?', function(activity) {				
				$.each(activity.data, function(index, event) {
					if(event.type in handler) {
						el.append($('<li>', {
							html: userLink(event.actor).prop('outerHTML') + ' ' + handler[event.type](event) + ' ' + jQuery.timeago(new Date(event.created_at))
						}))
					}
					else {
						console.log('No handler for ' + event.type + ' implemented.')
					}
				})			
			}, "json")
		})
	}
})(jQuery)