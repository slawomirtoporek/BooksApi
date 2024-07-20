const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return "Error" if no arguments are given', () => {
    expect(formatFullname()).to.equal('Error');
  });

  it('should return correctly formatted fullname with proper capitalization', () => {
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('JOHN doE')).to.equal('John Doe');
    expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
    expect(formatFullname('aMAnda doe')).to.equal('Amanda Doe');
  });

});
