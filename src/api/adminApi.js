import instance from "../utils/request";

// 登录
export const $login = async (values) => {
    // console.log(values)
    let res = {}
    await instance.get(
        '/login',
      {
        params: values
      }          
    )
    .then(function (response) {;
      res = response.data
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // 总是会执行
      // console.log(res, '执行信息')
    }); 
    return res
}