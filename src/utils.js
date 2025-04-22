export function getAge(date) {
  let todayDate = new Date();
  let birthDate = new Date(date);
  let age = todayDate.getFullYear() - birthDate.getFullYear();
  let m = todayDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && todayDate.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}