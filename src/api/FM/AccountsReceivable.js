import request from '@/utils/request'

export function getAccountsReceivable(pageNum) {
  return request({
    url: '/FM/accounts-receivable/all',
    method: 'get',
    params: { pageNum }
  })
}

export function getAccountsReceivableById(id) {
  return request({
    url: '/FM/accounts-receivable/get',
    method: 'get',
    params: { id }
  })
}
export function addAccountsReceivable(form) {
  // 默认取得了三级分类中的每个分类的id，只需传最后一级的id即可
  //form.categoryId = form.categoryId[2]
  return request({
    url: '/FM/accounts-receivable/add',
    method: 'post',
    params: form
  })
}
export function editAccountsReceivable(form) {
  //form.categoryId = form.categoryId[2]
  return request({
    url: '/FM/accounts-receivable/edit',
    method: 'post',
    //params: form
  })
}

export function DeleteAccountsReceivableById(id) {
  return request({
    url: '/FM/accounts-receivable/delete',
    method: 'post',
    params: { id }
  })
}

export function getAccountsReceivableSupplierAndAmount(){
  return request({
    url: '/FM/accounts-receivable/getSupplierandAmount',
    method: 'get',
  })
}
