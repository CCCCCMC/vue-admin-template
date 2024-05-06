import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },



  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: '项目管理',
    meta: {
      title: '项目管理',
      icon: 'nested'
    },
    children: [
      {
        path: '计划管理',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'ProdcutionPlan',
        meta: { title: '计划管理' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },
{
        path: '/brand',
        component: Layout,
        redirect: '/brand/list',
        name: 'Example',
        meta: { title: '品牌管理', icon: 'el-icon-s-help' },
        children: [{
                path: 'list',
                name: 'list',
                component: () =>
                    import ('@/views/brand/index'),
                meta: { title: '品牌列表', icon: 'table' }
            },
            {
                path: 'add',
                name: 'add',
                component: () =>
                    import ('@/views/brand/add'),
                meta: { title: '添加品牌', icon: 'tree' }
            },
            // 此路由用于编辑品牌信息，:id用于接收需要被修改的品牌id
            {
                // /brand/edit/123
                path: 'edit/:id',
                name: 'edit',
                // 此路由不需要在页面上显示
                hidden: true,
                component: () =>
                    import ('@/views/brand/add'),
                meta: { title: '编辑品牌', icon: 'tree' }
            }
        ]
    },
  {
      path: '/PRM',
      component: Layout,
      redirect: '/PRM/order',
      name: '制造与生产管理',
      meta: {
        title: '制造与生产管理',
        icon: 'nested'
      },
      children: [
        {
          path: 'order',
          component: () => import('@/views/PRM/Order/index'), // Parent router-view
          name: '计划与排产',
          meta: { title: '计划与排产' },
        },
        {
          path: 'MRP',
          component: () => import('@/views/PRM/MaterialRequirement/index'),
          name: '物料需求计划',
          meta: { title: '物料需求计划' }
        },
        {
          path: 'add',
          name: 'add',
          hidden: true,
          component: () =>
            import ('@/views/PRM/MaterialRequirement/add'),
          meta: { title: '添加物料需求计划', icon: 'tree' }
        },
        // 此路由用于编辑品牌信息，:id用于接收需要被修改的品牌id
        {
          // /brand/edit/123
          path: 'edit/:id',
          name: 'edit',
          // 此路由不需要在页面上显示
          hidden: true,
          component: () =>
            import ('@/views/PRM/MaterialRequirement/add'),
          meta: { title: '编辑物料需求计划', icon: 'tree' }
        }
      ]
    },
{
      path: '/FM',
      component: Layout,
      redirect: '/FM/FinancialRecord',
      name: '财务管理',
      meta: {
        title: '财务管理',
        icon: 'nested'
      },
      children: [
        {
          path: 'FinancialRecord',
          component: () => import('@/views/FM/FinancialRecord/index'), // Parent router-view
          name: '财务核算',
          meta: { title: '财务核算' },
        },
        {
          path: 'Accounts',
          component: () => import('@/views/FM/Accounts/index'),
          name: '账款管理',
          meta: { title: '账款管理' }
        }
      ]
    },
    {
          path: '/SCM',
          component: Layout,
          redirect: '/SCM/Supplier',
          name: '供应链管理',
          meta: {
            title: '供应链管理',
            icon: 'nested'
          },
          children: [
            {
              path: 'Supplier',
              component: () => import('@/views/SCM/Supplier/index'), // Parent router-view
              name: '供应商管理',
              meta: { title: '供应商管理' },
            },
            {
              path: 'PurchaseOrder',
              component: () => import('@/views/SCM/PurchaseOrder/index'),
              name: '采购管理',
              meta: { title: '采购管理' }
            },
            {
              path: 'InventoryOrder',
              component: () => import('@/views/SCM/InventoryOrder/index'),
              name: '库存管理',
              meta: { title: '库存管理' }
            }
          ]

        },
        {
              path: '/HRM',
              component: Layout,
              redirect: '/HRM/Employee',
              name: '人力资源管理',
              meta: {
                title: '人力资源管理',
                icon: 'nested'
              },
              children: [
                {
                  path: 'list',
                  component: () => import('@/views/HRM/Employee/index'), // Parent router-view
                  name: 'list',
                  meta: { title: '档案管理' },
                },
                {
                  path: 'add',
                  name: 'add',
                  hidden: true,
                  component: () =>
                    import ('@/views/HRM/Employee/add'),
                  meta: { title: '添加档案', icon: 'tree' }
                },
                // 此路由用于编辑品牌信息，:id用于接收需要被修改的品牌id
                {
                  // /brand/edit/123
                  path: 'edit/:id',
                  name: 'edit',
                  // 此路由不需要在页面上显示
                  hidden: true,
                  component: () =>
                    import ('@/views/HRM/Employee/add'),
                  meta: { title: '编辑档案', icon: 'tree' }
                },
                {
                  path: 'PerformanceReview',
                  component: () => import('@/views/HRM/PerformanceReview/index'),
                  name: '绩效考核',
                  meta: { title: '绩效考核' }
                }
              ]
            },
            {
                path: '/example',
                component: Layout,
                redirect: '/example/tree',
                name: 'Example',
                meta: { title: 'Example', icon: 'el-icon-s-help' },
                children: [

                  {
                    path: 'tree',
                    name: 'Tree',
                    component: () => import('@/views/tree/index'),
                    meta: { title: 'Tree', icon: 'tree' }
                  }
                ]
              },

              {
                path: '/form',
                component: Layout,
                children: [
                  {
                    path: 'index',
                    name: 'Form',
                    component: () => import('@/views/form/index'),
                    meta: { title: 'Form', icon: 'form' }
                  }
                ]
              },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
