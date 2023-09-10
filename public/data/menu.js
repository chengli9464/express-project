 const menuAdminUsers = [
  {
    path: '/home',
    name: 'home',
    icons:'HomeFilled',
    label: '首页',
  },
  {
    path: '/system',
    label: '系统管理',
    icons:'Setting',
    children:[
      {
        path:'/user',
        name:'user',
        icons:'UserFilled',
        label:'用户管理'
      },
      {
        path:'/role',
        name:'role',
        icons:'Avatar',
        label:'角色管理'
      },
      {
        path:'/menu',
        name:'menu',
        icons:'Operation',
        label:'菜单管理'
      },
      {
        path:'/notice',
        name:'notice',
        icons:'ChatRound',
        label:'通知公告'
      },
    ]
  },
  {
    path:'/monitor',
    label:'系统监控',
    icons:'Monitor',
    children:[
      {
        path:'/online',
        name:'online',
        icons:'User',
        label:'在线用户'
      },
      {
        path:'/job',
        name:'job',
        icons:'CollectionTag',
        label:'定时任务'
      },
      {
        path:'/server',
        name:'server',
        icons:'Cpu',
        label:'服务监控'
      },
    ]
  },
  {
    path:'/tool',
    label:'系统工具',
    icons:'Suitcase',
    children:[
      {
        path:'/build',
        name:'build',
        icons:'DocumentAdd',
        label:'表单构建'
      },
      {
        path:'/swagger',
        name:'swagger',
        icons:'SetUp',
        label:'系统接口'
      },
    ]
  }
];

const menuUsers =[
  {
    path: '/home',
    name: 'home',
    icons:'HomeFilled',
    label: '首页',
  },
  {
    path: '/analysis',
    name: 'analysis',
    icons:'Histogram',
    label: '数据分析',
  },
  {
    path: '/product',
    label: '商品中心',
    icons:'GoodsFilled',
    children:[
      {
        path:'/list',
        name:'list',
        icons:'ShoppingCart',
        label:'商品列表'
      },
      {
        path:'/category',
        name:'category',
        icons:'ShoppingBag',
        label:'商品分类'
      },
      {
        path:'/property',
        name:'property',
        icons:'PriceTag',
        label:'商品属性'
      },
      {
        path:'/brand',
        name:'brand',
        icons:'Trophy',
        label:'商品品牌'
      },
    ]
  },
  {
    path:'/trade',
    label:'订单中心',
    icons:'ShoppingCartFull',
    children:[
      {
        path:'/order',
        name:'order',
        icons:'List',
        label:'订单列表'
      },
      {
        path:'/afterSale',
        name:'afterSale',
        icons:'SoldOut',
        label:'售后管理'
      },
      {
        path:'/delivery',
        name:'delivery',
        icons:'Sell',
        label:'配送管理'
      },
    ]
  },
];


module.exports = {menuAdminUsers,menuUsers}