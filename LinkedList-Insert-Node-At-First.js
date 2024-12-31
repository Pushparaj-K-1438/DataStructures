const Node = (value, next = null) => ({
  value,
  next,
});

const createList = () => ({ head: null });

const insertListAtStart = (list, value) => {
  const newNode = Node(value, list.head);
  return {
    ...list,
    head: newNode,
  };
};

const insertNodeAtEnd = (list, value) => {
  let current = list.head;
  console.log('current value', current);
  const newNode = Node(value);
  if (!current) {
    list.head = newNode;
    return list;
  }
  console.log('new Node', newNode);
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
  return list;
};

const getNodePosition = list => {
  return list.head ? list.head.value : -1;
};

(() => {
  let list = createList();
  console.log('createdList', list);

  list = insertListAtStart(list, 4);
  console.log('Linked list after inserting 4:', list);
  console.log('First node value:', getNodePosition(list));

  list = insertListAtStart(list, 9);
  console.log(list);
  console.log('First node value:', getNodePosition(list));

  list = insertNodeAtEnd(list, 10);
  console.log(list);
  console.log('First node value:', getNodePosition(list));
})();
