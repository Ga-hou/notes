# 前端框架诞生过程

## 1.DOM操作

### 需求:   
- 点击按钮更改数据

        <ol id="userinfo">
            <li id="name">gahou</li>
            <li id="sex">男</li>
            <li id="job">前端</li>
        </ol>
        <button id="btn">change</button>

### 方式:

    const btn = document.getElementById('btn');
    btn.addEventListener('click',function(){
        document.getElementById('name').innerHTML = 'ljh';
    });

### 缺点

- 通过`多次`getDOM和setDOM操作, 并且要设置ID

*** 

## 2.模板系统

需要加入以下模板

    <script id="template" type="text/html">
        <ol id="userinfo">
            <li id="name">{{name}}</li>
            <li id="sex">{{sex}}</li>
            <li id="job">{{job}}</li>
        </ol>
        <button id="btn">next</button>
    </script>

添加辅助数据

    const data = {
        gahou: {
            name: 'gahou',
            sex: '男',
            job: '前端'
        },
        ljh: {
            name: 'ljh',
            sex: '男',
            job: '前端'
        }
    }
### 方式

    const userInfo = document.getElementById('userinfo');
    
    userInfo.innerHTML = template('template',data.gahou);

### 优点

- 渲染数据不需要多次操作DOM

***

### 模板系统增加需求

### 需求: 

- 点击按钮切换信息

### 直接加入事件

    const btn = document.getElementById('btn');
    let currentUser;
    btn.addEventListener('click',function(){
        if(currentUser === data.ljh){
            currentUser = data.gahou;
        }
        else{
            currentUser = data.ljh;
        }
        userInfo.innerHTML = template('template',currentUser);
    });

发现事件只会触发一次

### 原因

- 模板引擎渲染是`异步`的, 事件在页面渲染之前绑定, 所以二次渲染后就不会触发事件

### 解决办法

1. 通过事件委托机制

2. 通过Jquery绑定事件
>$(document).on()

3. 引入Virtual DOM, 再渲染DOM tree之前
>template > Virtual DOM > DOM tree

### 缺点

- 假如有大量数据渲染的话, 每次更新数据都会导致整个页面重新渲染, 页面性能就会变差

## 引入局部更新

### 待解决