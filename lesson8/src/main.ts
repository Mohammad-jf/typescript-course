const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

interface Boolcheck<T> {
  value: T;
  is: boolean;
}

const checkBool = <T>(arg: T): Boolcheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

interface HasId {
  id: number;
}

const proccessUser = <T extends HasId>(user: T): T => {
  // proccess user with logic
  return user;
};
