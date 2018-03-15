module.exports = (robot) => {
  
  robot.on('issues.opened', async context=>{

    robot.log(context);
  	const params = context.issue({body: 'issue created'})
	return context.github.issues.createComment(params)  	
  })
}
