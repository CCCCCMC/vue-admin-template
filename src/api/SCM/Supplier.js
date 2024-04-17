import request from '@/utils/request';

export function getSuppliers(pageNum) {
  return request({
    url: '/suppliers/all',
    method: 'get',
    params: { pageNum }
  })
}