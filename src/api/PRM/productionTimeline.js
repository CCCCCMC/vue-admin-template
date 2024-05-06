import request from "@/utils/request";

export function getProductionTimeline() {
  return request({
    url: '/PRM/productionTimeline/get',
    method: 'get'
  })
}
