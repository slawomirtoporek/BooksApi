module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  if(!fullName) return 'Error';
  const [ firstName, lastName ] = fullName.split(' ');
  if(!firstName || !lastName) return false;
  return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
};
