const { param, body, validationResult } = require('express-validator');

const checkErrors = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  const errorList = errors.array().map((err) => err.msg);
  return errors.isEmpty() ? next() : next(errorList);
};

const checkId = [
  param('id').isMongoId().withMessage('Is not a valid Mongo ID'),
  checkErrors,
];

const checkAddDuck = [
  body('name', 'No name was sent')
    .trim()
    .isAlpha()
    .withMessage('Name must contain only characters')
    .isLength({ max: 20 })
    .withMessage('Name must be up to 20 characters long'),
  body('image', 'No image url was sent')
    .isURL()
    .withMessage('Image must be a valid URL'),
  body('quote')
    .optional({ falsy: true })
    .isLength({ min: 15, max: 50 })
    .withMessage('Quotes must be between 15 and 50 characters long'),
  body('owner').isAlpha().withMessage('Owner must contain only characters'),
  checkErrors,
];

const checkUpdateDuck = [
  body('name', 'No name was sent.')
    .optional({ values: 'falsy' })
    .trim()
    .isAlpha()
    .withMessage('Name must contain only letters.'),
  body('image', 'No image url was sent.')
    .optional({ values: 'falsy' })
    .trim()
    .isURL()
    .withMessage('Image must be a valid URL.'),
  body('quote')
    .optional({ values: 'falsy' })
    .isLength({ min: 15, max: 50 })
    .withMessage('Quotes must be between 15 and 50 characters long.'),
  body('owner', 'No owner was sent.')
    .optional({ values: 'falsy' })
    .isAlpha()
    .withMessage('Owner must contain only letters.'),
  checkErrors,
];

module.exports = { checkId, checkAddDuck, checkUpdateDuck };
