import request from '@/utils/request'

export function getInventoryOrders(pageNum) {
  return request({
    url: '/SCM/inventory-order/all',
    method: 'get',
    params: { pageNum }
  })
}

export function getInventoryOrderById(id) {
  return request({
    url: '/SCM/inventory-order/get',
    method: 'get',
    params: { id }
  })
}
export function addInventoryOrder(form) {
  // 默认取得了三级分类中的每个分类的id，只需传最后一级的id即可
  //form.categoryId = form.categoryId[2]
  return request({
    url: '/SCM/inventory-order/add',
    method: 'post',
    params: form
  })
}
export function editInventoryOrder(form) {
  //form.categoryId = form.categoryId[2]
  return request({
    url: '/SCM/inventory-order/edit',
    method: 'post',
    //params: form
  })
}

export function DeleteInventoryOrderById(id) {
  return request({
    url: '/SCM/inventory-order/delete',
    method: 'post',
    params: { id }
  })
}
