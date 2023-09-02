 const menuAdminUsers = [
  {
    path: '/home',
    name: 'home',
    label: '首页',
  },
  {
    path: '/system',
    label: '系统管理',
    children:[
      {
        path:'/user',
        name:'user',
        label:'用户管理'
      },
      {
        path:'/role',
        name:'role',
        label:'角色管理'
      },
      {
        path:'/menu',
        name:'menu',
        label:'菜单管理'
      },
      {
        path:'/notice',
        name:'notice',
        label:'通知公告'
      },
    ]
  },
  {
    path:'/monitor',
    label:'系统监控',
    children:[
      {
        path:'/online',
        name:'online',
        label:'在线用户'
      },
      {
        path:'/job',
        name:'job',
        label:'定时任务'
      },
      {
        path:'/server',
        name:'server',
        label:'服务监控'
      },
    ]
  },
  {
    path:'/tool',
    label:'系统工具',
    children:[
      {
        path:'/build',
        name:'build',
        label:'表单构建'
      },
      {
        path:'/swagger',
        name:'swagger',
        label:'系统接口'
      },
    ]
  }
];

const menuUsers =[
  {
    path: '/home',
    name: 'home',
    label: '首页',
  },
  {
    path: '/analysis',
    name: 'analysis',
    label: '数据分析',
  },
  {
    path: '/product',
    label: '商品中心',
    children:[
      {
        path:'/list',
        name:'list',
        label:'商品列表'
      },
      {
        path:'/category',
        name:'category',
        label:'商品分类'
      },
      {
        path:'/property',
        name:'property',
        label:'商品属性'
      },
      {
        path:'/brand',
        name:'brand',
        label:'商品品牌'
      },
    ]
  },
  {
    path:'/trade',
    label:'订单中心',
    children:[
      {
        path:'/order',
        name:'order',
        label:'订单列表'
      },
      {
        path:'/afterSale',
        name:'afterSale',
        label:'售后管理'
      },
      {
        path:'/deliverY',
        name:'delivery',
        label:'配送管理'
      },
    ]
  },
];


module.exports = {menuAdminUsers,menuUsers}