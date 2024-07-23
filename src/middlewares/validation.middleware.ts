import { ValidationChain, check } from "express-validator";

export const validator: ValidationChain[] = [
  check("link").not().isEmpty().withMessage("The link property is required."),
  check("title").not().isEmpty().withMessage("The title property is required."),
  check("content")
    .not()
    .isEmpty()
    .withMessage("The content property is required."),
  check("date")
    .not()
    .isEmpty()
    .withMessage("The date property is required.")
    .custom((value: string) => {
      const [month, year] = value.split("-");

      return true;
    }),
];
