function errorHandler(fn = () => {}, ...rest) {
  try {
    return fn(...rest);
  } catch (error) {
    console.log(`🆘 Error::`, error.message);
  }
}

window.errorHandler = errorHandler;
