export function isBoolean(val: any) {
  return val instanceof Boolean || val === true || val === false;
}

export default {
  isBoolean,
};
