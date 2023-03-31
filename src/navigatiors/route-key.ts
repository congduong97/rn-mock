function createEnum<T extends {[P in keyof T]: P}>(o: T) {
  return o;
}

export const ROUTE_KEY = createEnum({
  ListScreen: 'ListScreen',
  'SINGIN-1': 'SINGIN-1',
  'SINGIN-2': 'SINGIN-2',
});
