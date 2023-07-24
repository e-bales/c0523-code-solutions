import LinkedList from './lib/linked-list';

export function removeTail(list) {
  if (list.next === null) {
    return;
  }
  while (list.next.next !== null) {
    list = list.next;
  }
  list.next = null;
}

export function updateNext(list, value) {
  if (list.next === null) {
    return;
  }
  list.next.data = value;
}

export function insertNext(list, value) {
  const node = new LinkedList(value);
  node.next = list.next;
  list.next = node;
}

export function removeNext(list) {
  if (list.next === null) {
    return;
  }
  list.next = list.next.next;
}

export function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const holder = list.next;
  list.next = list.next.next;
  holder.next = list;
  return holder;
}
