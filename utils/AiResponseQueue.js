class AiResponseQueue {
  constructor() {
    this.items = [];
  }

  // 入队操作
  enqueue(element) {
    this.items.push(element);
  }

  // 出队操作
  dequeue() {
    if (this.isEmpty()) {
      return "队列为空";
    }
    return this.items.shift();
  }

  // 查看队列前端的元素
  front() {
    if (this.isEmpty()) {
      return "队列为空";
    }
    return this.items[0];
  }

  // 检查队列是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 获取队列的大小
  size() {
    return this.items.length;
  }

  // 清空队列
  clear() {
    this.items = [];
  }
}

module.exports = AiResponseQueue;
