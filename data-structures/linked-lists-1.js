import LinkedList from './lib/linked-list';

export function getHead(list) {
  return list.data;
}

export function updateHead(list, value) {
  list.data = value;
}

export function withoutHead(list) {
  return list.next;
}

export function prepend(list, value) {
  const node = new LinkedList(value);
  node.next = list;
  return node;
}
