import { faker } from '@faker-js/faker';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const DEFAULT_CARD_NUMBER = '0000 0000 0000 0000';
const CARD_NUMBER_PATTERN = '#### #### #### ####';
const DEFAULT_CARD_MM = '00';
const DEFAULT_CARD_YY = '00';
const DEFAULT_CARD_CVC = '000';
const DEFAULT_CARD_NAME = faker.person.fullName();
const RANDOM_CREDIT_CARD_NUMBER = faker.finance.creditCardNumber(CARD_NUMBER_PATTERN);

export {
  ALPHABET,
  CARD_NUMBER_PATTERN,
  DEFAULT_CARD_CVC,
  DEFAULT_CARD_MM,
  DEFAULT_CARD_NAME,
  DEFAULT_CARD_NUMBER,
  DEFAULT_CARD_YY,
  RANDOM_CREDIT_CARD_NUMBER,
};
