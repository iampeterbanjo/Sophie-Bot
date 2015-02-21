/*jshint laxcomma:true*/

/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * 'src/app/home', however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a 'note' section could have the submodules 'note.create',
 * 'note.delete', 'note.edit', etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 */
(function(module) {

    // As you add controllers to a module and they grow in size, feel free to place them in their own files.
    //  Let each module grow organically, adding appropriate organization and sub-folders as needed.
    module.controller('HomeController', function () {
        // The top section of a controller should be lean and make it easy to see the "signature" of the controller
        //  at a glance.  All function definitions should be contained lower down.
        var model = this
						, introduction = "Hi I\'m Sophie."
						, SophieBot = new ElizaBot()
						, sophiesLines;

        model.someVar = 'blue';
        model.someList = ['one', 'two', 'three'];
				model.sophie = {};
				model.sophie.says = introduction + ' ' + SophieBot.getInitial();
				model.user = {};

				model.user.promptResponse = function () {
					if(model.sophie.says.indexOf('feel') > -1){
						model.user.prompt = 'I feel..';
					} else if(model.sophie.says.indexOf('afraid') > -1){
						model.user.prompt = "I\'m afraid of..";
					}
				};

				model.user.promptResponse();

				model.sophie.reset = function () {
					model.sophie.says = 'Goodbye.';
					SophieBot.reset();
					model.user.says = '';
				};

				model.sophie.reply = function () {
					model.sophie.says = SophieBot.transform(model.user.says);
				};

        init();

        function init() {
            // A definitive place to put everything that needs to run when the controller starts. Avoid
            //  writing any code outside of this function that executes immediately.
        }
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("sophie.home")));