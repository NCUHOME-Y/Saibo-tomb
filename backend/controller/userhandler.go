package controller

import (
	"Login/model"
	"Login/utils"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"net/http"
	//"text/template"
)

func Register(c *gin.Context) {
	db := utils.GetDB()

	reqUser := model.User{}
	c.Bind(&reqUser)

	mobile := reqUser.Mobile
	code := reqUser.Code

	if len(code) < 6 {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code": 1,
			"msg":  "密码必须大于6位",
		})
		return
	}

	if isMobileExist(db, mobile) {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code": 2,
			"msg":  "当前用户名已经注册",
		})
		return
	}

	//token, _ := GetToken(mobile, code)
	//claim, _ := ParseToken(token)
	//fmt.Println(claim)

	db.Select("Mobile", "Code").Create(&reqUser)

	c.JSON(http.StatusOK, gin.H{
		"msg":  "注册成功",
		"date": reqUser,
	})

}

func Login(c *gin.Context) {
	db := utils.GetDB()
	var reqUser = model.User{}
	c.Bind(&reqUser)

	mobile := reqUser.Mobile
	code := reqUser.Code

	var user model.User
	db.Where("mobile = ?", mobile).First(&user)
	if user.ID == 0 {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"msg": "用户不存在",
		})
		return
	}

	if user.Code != code {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code": 3,
			"msg":  "密码错误",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"msg":  "登录成功",
		"data": user,
	})

}

func GetTomb(c *gin.Context) {
	db := utils.GetDB()
	var userTomb model.UserTomb
	err := c.ShouldBind(&userTomb)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"msg": "blind failed",
		})
	}

	userId := userTomb.ID
	var userData model.UserTomb
	err = db.Model(&model.UserTomb{}).Where("id = ?", userId).Find(&userData).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"code": 4,
			"msg":  "未查找到信息",
		})
	}

	userFirstId := userData.UserFirstId
	userSecondId := userData.UserSecondId
	userThirdId := userData.UserThirdId

	userFirstTomb := model.Tomb{}
	userSecondTomb := model.Tomb{}
	userThirdTomb := model.Tomb{}
	db.Model(&model.Tomb{}).Where("id = ?", userFirstId).Find(&userFirstTomb)
	db.Model(&model.Tomb{}).Where("id = ?", userSecondId).Find(&userSecondTomb)
	db.Model(&model.Tomb{}).Where("id = ?", userThirdId).Find(&userThirdTomb)

	c.JSON(http.StatusOK, gin.H{
		"msg": "查找成功",
	})
}

func DeleteTomb(c *gin.Context) {
	db := utils.GetDB()

	deleteTomb := model.Tomb{}
	c.Bind(&deleteTomb)

	var deleteTombData = model.Tomb{
		ID: deleteTomb.ID,
	}
	err := db.Model(model.Tomb{}).Delete(&deleteTombData).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"code": 5,
			"msg":  "删除失败！",
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"msg": "删除成功",
		})
	}
}

func PutTomb(c *gin.Context) {
	db := utils.GetDB()

	changeTomb := model.Tomb{}
	c.Bind(changeTomb)

	var putTomb = model.Tomb{
		ID:       changeTomb.ID,
		TombText: changeTomb.TombText,
	}
	err := db.Model(&putTomb).Updates(&putTomb).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"code": 6,
			"msg":  "修改失败",
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"msg": "修改成功",
		})
	}

}

func CreateTomb(c *gin.Context) {
	db := utils.GetDB()

	createTomb := model.Tomb{}
	c.Bind(createTomb)

	tombText := createTomb.TombText
	tombName := createTomb.TombName

	newTomb := &model.Tomb{
		TombName: tombName,
		TombText: tombText,
	}

	err := db.Create(newTomb)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"code": 8,
			"msg":  "创建失败",
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"msg": "创建成功",
		})
	}
}

func ChangeTombFunction(c *gin.Context) {
	db := utils.GetDB()

	tombFunction := model.Tomb{}
	c.Bind(&tombFunction)

	var styleChange = model.Tomb{
		ID:        tombFunction.ID,
		TombStyle: tombFunction.TombStyle,
		IsApple:   tombFunction.IsApple,
		IsPear:    tombFunction.IsPear,
		IsFlower:  tombFunction.IsFlower,
		IsBurn:    tombFunction.IsBurn,
		IsWine:    tombFunction.IsWine,
	}
	err := db.Model(&styleChange).Updates(&styleChange).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"code": 7,
			"msg":  "添加失败",
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"msg": "修改成功",
		})
	}

}

func isMobileExist(db *gorm.DB, mobile string) bool {
	var user model.User
	db.Where("mobile = ?", mobile).First(&user)
	if user.ID != 0 {
		return true
	}
	return false
}
