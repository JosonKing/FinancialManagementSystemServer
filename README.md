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
get users: localhost:3000/user
add user: localhost:3000/user/add?name=xxx
update user: localhost:3000/user/update?id=100005&name=xxx
delete user: localhost:3000/user/delete?id=100005

## category
get categorys: localhost:3000/category
add category: localhost:3000/category/add?name=xxx
update category: localhost:3000/category/update?id=100005&name=xxx
delete category: localhost:3000/category/delete?id=100005

## order
get orders: localhost:3000/order
add order: localhost:3000/order/add?name=xxx
update order: localhost:3000/order/update?id=100005&name=xxx
delete order: localhost:3000/order/delete?id=100005
