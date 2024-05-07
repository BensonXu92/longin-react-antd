import React from 'react'
import "./Login.scss";
import { Button, Form, Input,notification } from 'antd';
import { $login } from '../../api/adminApi';

export default function Login() {
  // 提示信息 提示框
  const [api, contextHolder] = notification.useNotification();
  // 打开提示框 带默认信息
  const openNotification = (type='info',message='系统提示') => {
    api[type]({
    message,
    description:'',
    placement:'top',
    duration: 1.5
    });
};
  
  // 创建 Form 实例，用于管理所有数据状态。在form组件绑定
  const [form] = Form.useForm();
  // 成功提交表单 事件
  const onFinish = async (values) => {
    let res = await $login(values)
    // console.log(res.msg)
    if (res.msg === "登录成功") {
      openNotification('success',res.msg)

    // ########################
    // //   这里执行登录成功后的下一步操作
    // ########################
    
    }
    else if(res.msg === "密码错误" | res.msg === "账号不存在"){
      openNotification('error',res.msg)
    }else{
      openNotification('warning','未知错误')
    }
  };

  return (
    <div className='login'>
      <div className='content'>

        {/* 提示信息 */}
        {contextHolder}
        
        <h2>后台管理系统</h2>
        {/* 登录表单 */}
        <Form
          name="basic"
          form = {form}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            loginId:'',
            loginPwd:''
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="账号"
            name="loginId"
            rules={[
              {
                required: true,
                message: '请输入账号！',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="loginPwd"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button onClick={()=>{
              form.resetFields()
            }} style={{marginLeft:'10px'}}>取消</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}