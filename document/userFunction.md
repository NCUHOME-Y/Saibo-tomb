# **SaiboTomb** 
## **用户使用文档**
### host: https://fallskies.tk
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
		<td>data</td>
		<td>JSON</td>
		<td>获取到的数据</td>
	</tr>
</tbody>
</table>


响应体示例：{  
		ID:        1,  
&emsp;      TombStyle: false,  
&emsp;  	IsApple:   false,  
&emsp;		IsPear:    true,  
&emsp;		IsFlower:  true,  
&emsp;		IsBurn:    false,  
&emsp;		IsWine:    false,  
	}


# 方法描述：新建Tomb
##### 请求方法：POST
请求体：

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

请求体示例：  
{  
&emsp;"tombName": "我的xxx",     
&emsp;"tombText": "离我而去吧"  
}  

响应体：  

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
		<td>msg</td>
		<td></td>
		<td>成功or失败</td>
	</tr>
</tbody>
</table>



响应体示例：  
{  
&emsp;"msg": "创建成功"  
}  


# 方法描述：删除Tomb
##### 请求方法：DELETE
##### URL：/home/delete
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
		<td>int</td>
		<td>需要删除的tomb ID</td>
	</tr>
</tbody>
</table>

请求体示例：  
{  
&emsp;"id" : 1  
}  

响应体：  

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
		<td>msg</td>
		<td></td>
		<td>成功or失败</td>
	</tr>
</tbody>
</table>


响应体示例：  
{  
&emsp;"msg" : "删除成功"  
}

# 方法描述：修改Tomb墓志铭
##### 请求方法：PUT
##### URL：/home/put
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
		<td>int</td>
		<td>需要修改的tomb ID</td>
	</tr>
	<tr>
		<td>tombText</td>
		<td>string</td>
		<td>修改内容</td>
	</tr>
</tbody>
</table>

请求体示例：   
{  
&emsp;"id": 2,     
&emsp;"tombText": "离我而去吧"  
}   


响应体：  

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
		<td>msg</td>
		<td></td>
		<td>成功or失败</td>
	</tr>
</tbody>
</table>

响应体示例：  
{  
&emsp;"msg" : "修改成功"  
}


# 方法描述：：样式更改 
##### 请求方法：PUT
##### URL：/home/change
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
		<td>int</td>
		<td>tomb ID</td>
	</tr>
	<tr>
		<td>tombStyle</td>
		<td>int</td>
		<td>样式选择</td>
	</tr>
	<tr>
		<td>isApple</td>
		<td>bool</td>
		<td>是否上供苹果</td>
	</tr>
	<tr>
		<td>isPear</td>
		<td>bool</td>
		<td>是否上供梨</td>
	</tr>
	<tr>
		<td>isWine</td>
		<td>bool</td>
		<td>是否上供酒</td>
	</tr>
	<tr>
		<td>isBurn</td>
		<td>bool</td>
		<td>是否上香</td>
	</tr>
	<tr>
		<td>isFlower</td>
		<td>bool</td>
		<td>是否上供花</td>
	</tr>
</tbody>
</table>

请求体示例：
{  
&emsp;        iD: 1,  
&emsp;		tombStyle: false,  
&emsp;		isApple:   true,  
&emsp;		isPear:    true,  
&emsp;		isFlower:  false,  
&emsp;		isBurn:    false,  
&emsp;		isWine:    false,  
}  

响应体：  

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
		<td>msg</td>
		<td></td>
		<td>成功or失败</td>
	</tr>
</tbody>
</table>

响应体示例：  
{  
&emsp;"msg" : "修改成功"  
}
