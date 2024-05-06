import request from '@/utils/request'

export function getEmployees(pageNum) {
  return request({
    url: '/HRM/employee/all',
    method: 'get',
    params: { pageNum }
  })
}

export function getEmployeeById(id) {
  return request({
    url: '/HRM/employee/get',
    method: 'get',
    params: { id }
  })
}
export function addEmployee(form) {
  // 默认取得了三级分类中的每个分类的id，只需传最后一级的id即可
  //form.categoryId = form.categoryId[2]
  return request({
    url: '/HRM/employee/add',
    method: 'post',
    params: form
  })
}
export function editEmployee(form) {
  //form.categoryId = form.categoryId[2]
  return request({
    url: '/HRM/employee/edit',
    method: 'post',
    //params: form
  })
}

export function DeleteEmployeeById(id) {
  return request({
    url: '/HRM/employee/delete',
    method: 'post',
    params: { id }
  })
}
