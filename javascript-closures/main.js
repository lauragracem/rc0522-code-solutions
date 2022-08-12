function graduate(credential) {
  return function name(fullName) {
    return fullName + ', ' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Laura Grace Manimtim'));
console.log(lawSchool('Laura Grace Manimtim'));
