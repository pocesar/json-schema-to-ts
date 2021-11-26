import Ajv from "ajv";

import { FromV7Schema } from "index";

var ajv = new Ajv();

describe("Boolean schemas", () => {
  const booleanSchema = { type: "boolean" } as const;

  type Boolean = FromV7Schema<typeof booleanSchema>;
  let booleanInst: Boolean;

  it("accepts boolean value", () => {
    booleanInst = true;
    expect(ajv.validate(booleanSchema, booleanInst)).toBe(true);

    booleanInst = false;
    expect(ajv.validate(booleanSchema, booleanInst)).toBe(true);
  });

  it("rejects other values", () => {
    // @ts-expect-error
    booleanInst = "true";
    expect(ajv.validate(booleanSchema, booleanInst)).toBe(false);

    // @ts-expect-error
    booleanInst = 42;
    expect(ajv.validate(booleanSchema, booleanInst)).toBe(false);
  });
});
