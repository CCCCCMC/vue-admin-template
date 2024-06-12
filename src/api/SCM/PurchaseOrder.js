import request from '@/utils/request'

export function getPurchaseOrders(pageNum) {
  return request({
    url: '/SCM/purchase-order/all',
    method: 'get',
    params: { pageNum }
  })
}

export function getPurchaseOrderById(id) {
  return request({
    url: '/SCM/purchase-order/get',
    method: 'get',
    params: { id }
  })
}
export function addPurchaseOrder(form) {
  // 默认取得了三级分类中的每个分类的id，只需传最后一级的id即可
  //form.categoryId = form.categoryId[2]
  return request({
    url: '/SCM/purchase-order/add',
    method: 'post',
    params: form
  })
}
export function editPurchaseOrder(form) {
  //form.categoryId = form.categoryId[2]
  return request({
    url: '/SCM/purchase-order/edit',
    method: 'post',
    //params: form
  })
}

export function DeletePurchaseOrderById(id) {
  return request({
    url: '/SCM/purchase-order/delete',
    method: 'post',
    params: { id }
  })
}
