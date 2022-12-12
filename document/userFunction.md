# **SaiboTomb** 
## **用户使用文档**

### 方法描述：获取Tomb信息
##### 请求方法：GET
##### URL：/home
请求体：

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
		<td>id</td>
		<td>string</td>
		<td>用户名</td>
	</tr>
</tbody>
</table>

请求体示例：  
{  
  "id":1  
}
响应体：
| 字段   | 类型   | 说明   |
|------|------|------|
| data | JSON | 相关数据 |


----

### 方法描述：新建Tomb
##### 请求方法：POST
##### URL：/home/create
请求体：

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
		<td>tombName</td>
		<td>string</td>
		<td>墓名</td>
	</tr>
	<tr>
		<td>tombText</td>
		<td>string</td>
		<td>墓志铭</td>
	</tr>
</tbody>
</table>



---
### 方法描述：删除Tomb
##### 请求方法：DELETE
##### URL：/home/delete

---
### 方法描述：修改Tomb墓志铭
##### 请求方法：PUT
##### URL：/home/put

---
### 方法描述：：样式更改 
##### 请求方法：PUT
##### URL：/home/change