module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  if(!fullName) return 'Error';
  
  const names = fullName.split(' ');
  const [firstName, lastName] = names;
  if (names.length !== 2) return 'Error';
  
  return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
};
