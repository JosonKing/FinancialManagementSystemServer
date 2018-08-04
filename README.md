# FinancialManagementSystemServer

1. clone
`git clone git@github.com:JosonKing/FinancialManagementSystemServer.git`
`cd ./FinancialManagementSystemServer`

2. install
`cnpm i`

3. start
`set DEBUG=FinancialManagementSystemServer & npm start`

# API
## user
1. get users: localhost:3000/user
2. add user: localhost:3000/user/add?name=xxx
3. update user: localhost:3000/user/update?id=100005&name=xxx
4. delete user: localhost:3000/user/delete?id=100005

## category
1. get categorys: localhost:3000/category
2. add category: localhost:3000/category/add?name=xxx
3. update category: localhost:3000/category/update?id=100005&name=xxx
4. delete category: localhost:3000/category/delete?id=100005

## order
1. get orders: localhost:3000/order
2. add order: localhost:3000/order/add?name=xxx
3. update order: localhost:3000/order/update?id=100005&name=xxx
4. delete order: localhost:3000/order/delete?id=100005
