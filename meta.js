module.exports = {
  questions: [
    {
      type: 'input',
      name: 'projectName'
    },
    {
      type: 'input',
      name: 'description'
    },
    {
      type: 'input',
      name: 'moduleName',
      message: 'moduleName',
      validate: function (val) {
        if (!val) {
          return "can't be empty"
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'serviceName',
      message: 'serviceName',
      validate: function (val) {
        if (!val) {
          return "can't be empty"
        } else {
          return true;
        }
      }
    }
  ],
  //endCallback will be called after the boilerplate is initilized
  endCallback: function(){
    console.log(process.cwd())
    console.log('great, it is done')
  }
}