import request from '@/utils/request'

export function getInventoryOrders() {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params: query
  })
}
