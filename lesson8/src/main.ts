const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  // if it was an array but has no length
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  // if it was an object but it has no keys
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

const getUsersProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

class StateObj<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObj('john');
console.log(store.state)
store.state = 'dave'
