Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.route('/', {name: 'piesEdit'});
Router.route('/pies', {name: 'piesList'});
// Router.route('/pies/:_id/edit', {name: 'piesEdit'});
// Router.route('/pomodoro', {name: 'pomodoro'});
// Router.route('/counter', {name: 'counter'});