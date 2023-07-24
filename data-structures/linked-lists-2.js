import LinkedList from './lib/linked-list';

export function getLength(list) {
  let count = 1;
  while (list.next !== null) {
    count++;
    list = list.next;
  }
  return count;
}

export function append(list, value) {
  while (list.next !== null) {
    list = list.next;
  }
  const node = new LinkedList(value);
  list.next = node;
}

export function getTail(list) {
  while (list.next !== null) {
    list = list.next;
  }
  return list.data;
}

export function includes(list, value) {
  while (list !== null) {
    if (list.data === value) {
      return true;
    }
    list = list.next;
  }
  return false;
}
