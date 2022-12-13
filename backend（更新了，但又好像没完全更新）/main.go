package main

import (
	"Login/controller"
	"Login/utils"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	eng := gin.Default()
	utils.Init()

	//跨域
	eng.Use(cors.Default())

	eng.GET("/register", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"msg": "ok",
		})
	})
	//注册
	eng.POST("/register", controller.Register)

	//登录
	eng.POST("/login", controller.Login)

	//获取Tomb信息
	eng.GET("/home", controller.GetTomb)

	//新建Tomb
	eng.POST("/home/create", controller.CreateTomb)

	//删除Tomb
	eng.DELETE("/home/delete", controller.DeleteTomb)

	//修改Tomb墓志铭
	eng.PUT("/home/put", controller.PutTomb)

	//功能更改
	eng.PUT("/home/change", controller.ChangeTombFunction)

	err := eng.Run(":8088")
	if err != nil {
		return
	}
}
