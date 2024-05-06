import request from '@/utils/request'

export function getAccountsPayables(pageNum) {
  return request({
    url: '/FM/accounts-payable/all',
    method: 'get',
    params: { pageNum }
  })
}

export function getAccountsPayableById(id) {
  return request({
    url: '/FM/accounts-payable/get',
    method: 'get',
    params: { id }
  })
}
export function addAccountsPayable(form) {
  // 默认取得了三级分类中的每个分类的id，只需传最后一级的id即可
  //form.categoryId = form.categoryId[2]
  return request({
    url: '/FM/accounts-payable/add',
    method: 'post',
    params: form
  })
}
export function editAccountsPayable(form) {
  //form.categoryId = form.categoryId[2]
  return request({
    url: '/FM/accounts-payable/edit',
    method: 'post',
    //params: form
  })
}

export function DeleteAccountsPayableById(id) {
  return request({
    url: '/FM/accounts-payable/delete',
    method: 'post',
    params: { id }
  })
}

export function getAccountsPayableSupplierAndAmount(){
  return request({
    url: '/FM/accounts-payable/getSupplierandAmount',
    method: 'get',
  })
}
