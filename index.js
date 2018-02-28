module.exports = (robot) => {
  // Your code here
  //robot.log('Yay, the app was loaded!')

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/

  robot.on('issues.opened', async context=>{

    robot.log(context);
  	const params = context.issue({body: 'issue created'})
	return context.github.issues.createComment(params)  	
  })
}
