# **SaiboTomb** 
## **用户文档**

### host ：https://www.fallskies.tk 

# **方法描述：注册账号**
#### URL地址：/register
#### 请求方法：POST
##### 请求体：

<table>
<thead>
	<tr>
		<th>字段</th>
		<th>类型</th>
		<th>说明</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>mobile</td>
		<td>string</td>
		<td>用户账号</td>
	</tr>
	<tr>
		<td>code</td>
		<td>string</td>
		<td>用户密码</td>
	</tr>
</tbody>
</table>

##### 请求体示例
{  
 "mobile":"123456"  
 "code":"13456789"  
}

##### 响应体示例：
{  
"msg":"注册成功"  
"date":   
&emsp;{  
&emsp;        "id": 33,  
&emsp;      "mobile": "123456",  
&emsp;       "code": "13456789"  
&emsp;    },  
}


# **方法描述：登录账号**
#### URL地址：/login
#### 请求方法：POST

#### 请求体：
<table>
<thead>
	<tr>
		<th>字段</th>
		<th>类型</th>
		<th>说明</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>mobile</td>
		<td>string</td>
		<td>用户账号</td>
	</tr>
	<tr>
		<td>code</td>
		<td>string</td>
		<td>用户密码</td>
	</tr>
</tbody>
</table>

##### 请求体示例
{  
 "mobile":"123456"  
 "code":"13456789"  
}

##### 响应体示例：
{  
"msg":"登录成功"  
"date":   
&emsp;{  
&emsp;        "id": 1,  
&emsp;      "mobile": "123456",  
&emsp;       "code": "13456789"  
&emsp;    },  
}
