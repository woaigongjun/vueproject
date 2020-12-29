
const tokens = {
  admin: {
    token: 'admin-token'
  },
  visitor: {
    token: 'visitor-token'
  }
}

const users = {
  'admin-token': {
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'admin',
    password:'admin',
    realName:'管理员'
  },
  'visitor-token': {
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'visitor',
    password:'visitor',
    realName:'游客'
  }
}

export default [
  // user login
  {
    url: '/user/Login',
    type: 'post',
    response: config => {
      const  userName  = config.body.userName
      const  password  = config.body.password
      const token = tokens[userName].token

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: '账户不存在'
        }
      }
      if(password!==users[token].password){
        return {
          code: 60204,
          message: '密码错误，请重试'
        }
      }

      return {
        code: '0000',
        data: {
          name:users[token].name ,
          realName:users[token].realName
        },
        message:'success'
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: '0000',
        data: null,
        message:'success'
      }
    }
  },
  // user register
  {
    url: '/user/register',
    type: 'post',
    response: _ => {
      return {
        code: '0000',
        data: null,
        message:'success'
      }
    }
  }
]
