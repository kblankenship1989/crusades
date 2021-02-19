export const enumKeys = <O extends Record<string, unknown>, K extends keyof O = keyof O>(obj: O): K[] => {
    return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
};

export const isEnumKey = <T>(e: T) => (token: any): token is T[keyof T] => Object.values(e).includes(token as T[keyof T]);
