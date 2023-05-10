const { param, body, validationResult } = require('express-validator');

const checkErrors = (req, res, next) => {
  const errors = validationResult(req);
  const errorList = errors.array().map((err) => err.msg);
  return errors.isEmpty() ? next() : next(errorList);
};

const checkId = [
  param('id').isMongoId().withMessage('Is not a valid Mongo ID'),
  checkErrors,
];

const checkAddDuck = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('No name sent')
    .matches(/^[a-zA-Z\s.]*$/)
    .withMessage('Name must contain only characters')
    .isLength({ max: 20 })
    .withMessage('Name must be up to 20 characters long'),
  body('image')
    .notEmpty()
    .withMessage('No email sent')
    .isURL()
    .withMessage('Image must be a valid URL'),
  body('quote')
    .optional({ values: 'falsy' })
    .isLength({ min: 15, max: 50 })
    .withMessage('Quotes must be between 15 and 50 characters long'),
  body('owner').notEmpty().withMessage('No owner sent'),
  checkErrors,
];

const checkUpdateDuck = [
  body('name')
    .optional({ values: 'falsy' })
    .trim()
    .matches(/^[a-zA-Z\s.]*$/)
    .withMessage('Name must contain only letters.'),
  body('image')
    .optional({ values: 'falsy' })
    .trim()
    .isURL()
    .withMessage('Image must be a valid URL.'),
  body('quote')
    .optional({ values: 'falsy' })
    .isLength({ min: 15, max: 50 })
    .withMessage('Quotes must be between 15 and 50 characters long.'),
  body('owner').optional({ values: 'falsy' }),
  checkErrors,
];

const checkAskDuck = [
  body('input')
    .notEmpty()
    .withMessage('No input sent')
    .isString()
    .withMessage('Input must be a string.'),
  checkErrors,
];

module.exports = { checkId, checkAddDuck, checkUpdateDuck, checkAskDuck };
