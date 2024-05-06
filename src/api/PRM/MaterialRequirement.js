import request from '@/utils/request'

export function getMaterialRequirements(pageNum) {
  return request({
    url: '/PRM/materialRequirement/all',
    method: 'get',
    params: { pageNum }
  })
}

export function getMaterialRequirementById(id) {
  return request({
    url: '/PRM/materialRequirement/get',
    method: 'get',
    params: { id }
  })
}
export function addMaterialRequirement(form) {
  // 默认取得了三级分类中的每个分类的id，只需传最后一级的id即可
  //form.categoryId = form.categoryId[2]
  return request({
    url: '/PRM/materialRequirement/add',
    method: 'post',
    params: form
  })
}
export function editMaterialRequirement(form) {
  //form.categoryId = form.categoryId[2]
  return request({
    url: '/PRM/materialRequirement/edit',
    method: 'post',
    //params: form
  })
}

export function DeleteMaterialRequirementById(id) {
  return request({
    url: '/PRM/materialRequirement/delete',
    method: 'post',
    params: { id }
  })
}
