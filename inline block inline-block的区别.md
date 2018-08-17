# inline block inline-block的区别

## inline
>表示行内显式

特点:
    
1. 和其他元素在同一行

2. 行高可撑开外部, 但是内部不显示效果

3. 宽高由内部元素决定

4. 垂直方向的边距无效, 水平方向有效

5. 无效属性: 

    - margin-top margin-bottom

    - padding-top padding-bottom

    - height, width
    
    - line-height

6. 常见行内元素

    - span

    - a

    - label

    - em

    - img

## block
>表示块级显式

特点:

1. 独占一行

2. width默认为100%

3. margin padding height width 都有效

4. 常见块级元素

    - div

    - p

    - ul ol

    - h1-h6

    - table

## inline-block
>对象为行内, 内容为块级

特点: 

1. 和其他元素在一行

2. margin padding height width 都有效

3. IE中line-block不支持, IE11才有

4. 适配IE:

    `display: inline-block;`
    
    `display: inline;`

    `zoom: 1;`