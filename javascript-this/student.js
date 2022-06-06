/* exported student */
var student = {
  firstName: 'Laura Grace',
  lastName: 'Manimtim',
  subject: 'Russian Literature',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }

};
