const Node = (value, next = null) => ({
  value,
  next,
});

const createList = () => ({ head: null });

const insertList = (list, value) => {
  const newNode = Node(value, list.head);
  return {
    ...list,
    head: newNode,
  };
};

const getNodePosition = list => {
  return list.head ? list.head.value : -1;
};
(() => {
  let list = createList();
  console.log('createdList', list);

  list = insertList(list, 4);
  console.log('Linked list after inserting 4:', list); // { firstNode: { value: 3, next: null } }
  console.log('First node value:', getNodePosition(list)); // 3
  list = insertList(list, 9);
  console.log(list);
  console.log('First node value:', getNodePosition(list)); // 3
})();
