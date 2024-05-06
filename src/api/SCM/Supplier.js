import request from '@/utils/request';

export function getSuppliers(pageNum) {
  return request({
    url: '/SCM/suppliers/all',
    method: 'get',
    params: {pageNum}
  })
}

export function getSupplierForDashboard() {
    return request({
      url: '/SCM/suppliers/all',
      method: 'get'
    })
}
