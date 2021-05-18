import cuid from "cuid";

export interface IdGenerator {
  makeId: () => string;
  isValid: (id: string) => boolean;
}

const idGenerator:IdGenerator = Object.freeze({
  makeId: cuid,
  isValid: cuid.isCuid,
});

export default idGenerator;
