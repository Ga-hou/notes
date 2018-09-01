# React知识点

## setState()异步

## dom diff

diff策略

1. Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。

2. 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。

3. 对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。

### React 分别对 tree diff、component diff 以及 element diff 进行算法优化

- tree diff

对树进行分层比较, 两棵树只会对同一层次的节点进行比较. 当发现节点已经不存在，则该节点及其子节点会被完全删除掉，不会用于进一步的比较.

如果出现了节点跨层级移动操作, 则`将该节点删除, 然后再创建`. 

`因此 React 官方建议不要进行 DOM 节点跨层级的操作。`

>注意：在开发组件时，保持稳定的 DOM 结构会有助于性能的提升。例如，可以通过 CSS 隐藏或显示节点，而不是真的移除或添加 DOM 节点。

- component diff

1. 如果是同一类型的组件，按照原策略继续比较 virtual DOM tree。

2. 如果不是，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点。

3. 对于同一类型的组件，有可能其 Virtual DOM 没有任何变化，如果能够确切的知道这点那可以节省大量的 diff 运算时间，因此 React 允许用户通过 shouldComponentUpdate() 来判断该组件是否需要进行 diff。

- element tree
>insert move and remove

对同一层级的同组子节点，添加唯一 key 进行区分

### 总结

- React 通过制定大胆的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题；

- React 通过分层求异的策略，对 tree diff 进行算法优化；

- React 通过相同类生成相似树形结构，不同类生成不同树形结构的策略，对 component diff 进行算法优化；

- React 通过设置唯一 key的策略，对 element diff 进行算法优化；

- 建议，在开发组件时，保持稳定的 DOM 结构会有助于性能的提升；

- 建议，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。
## React16 fiber