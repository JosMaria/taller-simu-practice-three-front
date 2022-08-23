const validationOfSeed = (seed) => parseInt(seed) > 999;

const validationNumberOfIterations = (times) => parseInt(times) > 0;

export {
  validationOfSeed,
  validationNumberOfIterations
}