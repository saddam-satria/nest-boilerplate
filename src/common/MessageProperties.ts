const AUTH_SUCCESS_LOGIN = {
  message: 'Login Berhasil',
  key: 'AUTH_SUCCESS_LOGIN',
};
const AUTH_ERROR_LOGIN = {
  message: 'No Handphone salah atau Password Salah',
  key: 'AUTH_ERROR_LOGIN',
};
const INVALID_OTP = {
  message: 'Kode OTP Salah',
  key: 'INVALID_OTP',
};
const FAILED_SENDING_OTP = {
  message: 'No Handphone Salah',
  key: 'FAILED_SENDING_OTP',
};
const AUTH_SUCCESS_REGISTER = {
  message: 'Berhasil Daftar Pengguna Baru',
  key: 'AUTH_SUCCESS_REGISTER',
};
const AUTH_ERROR_REGISTER = {
  message: 'Kesalahan saat registrasi',
  key: 'AUTH_ERROR_REGISTER',
};

const BASIC_ERROR = {
  message: 'Error, Terjadi Kesalahan',
  key: 'BASIC_ERROR',
};

const BASIC_SUCCESS = {
  message: 'Berhasil',
  key: 'BASIC_SUCCESS',
};

const JWT_REQUIRED = {
  message: 'Token Dibutuhkan',
  key: 'JWT_REQUIRED',
};
const JWT_EXPIRED = {
  message: 'Token Expired',
  key: 'JWT_EXPIRED',
};
const JWT_INVALID = {
  message: 'Invalid Token',
  key: 'JWT_INVALID',
};

const NOT_ALLOWED = {
  message: 'Akses Tidak Berikan',
  key: 'NOT_ALLOWED',
};

const MessagesResponse = (key: string) => {
  switch (key) {
    case AUTH_SUCCESS_LOGIN.key:
      return AUTH_SUCCESS_LOGIN.message;
    case AUTH_ERROR_LOGIN.key:
      return AUTH_ERROR_LOGIN.message;
    case INVALID_OTP.key:
      return INVALID_OTP.message;
    case FAILED_SENDING_OTP.key:
      return FAILED_SENDING_OTP.message;
    case AUTH_SUCCESS_REGISTER.key:
      return AUTH_SUCCESS_REGISTER.message;
    case AUTH_ERROR_REGISTER.key:
      return AUTH_SUCCESS_REGISTER.message;
    case BASIC_ERROR.key:
      return BASIC_ERROR.message;
    case BASIC_SUCCESS.key:
      return BASIC_ERROR.message;
    case JWT_EXPIRED.key:
      return JWT_EXPIRED.message;
    case JWT_INVALID.key:
      return JWT_INVALID.message;
    case JWT_REQUIRED.key:
      return JWT_REQUIRED.message;
    case NOT_ALLOWED.key:
      return NOT_ALLOWED.message;
    default:
      break;
  }
};

export default MessagesResponse;
