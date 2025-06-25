function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

function isValidName(name) {
  return typeof name === 'string' && name.length >= 3;
}

function isNumericId(id) {
  return typeof id === 'number';
}

function isUniqueId(id, users) {
  return typeof id === 'number' && !users.some(user => user.id === id);
}

function userExistsById(id, users) {
  return typeof id === 'number' && users.some(user => user.id === id);
}

function validateUser(user, users, mode = null) {
  const { name, email, id } = user;
  if (!isValidName(name)) {
    return {
      isValid: false,
      error: 'El nombre debe tener al menos 3 caracteres.'
    };
  }
  if (!isValidEmail(email)) {
    return { isValid: false, error: 'El correo electronico no es valido.' };
  }
  if (mode === 'create' && !isUniqueId(id, users)) {
    return { isValid: false, error: 'El ID debe ser numerico y unico.' };
  }
  if (mode != 'create' && !isNumericId(id)) {
    return { isValid: false, error: 'El ID debe ser numerico' };
  }
  if (mode != 'create' && !userExistsById(id, users)) {
    return { isValid: false, error: `El usuario con ID: ${id}, no existe.` };
  }
  return { isValid: true };
}

module.exports = {
  isValidEmail,
  isValidName,
  isUniqueId,
  isNumericId,
  userExistsById,
  validateUser
};