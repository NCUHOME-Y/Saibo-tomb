package controller

import (
	"Login/model"
	"Login/utils"
	"fmt"
	jwt "github.com/dgrijalva/jwt-go"
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

	if isMobileExist(db, mobile) {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"msg": "当前用户名已经注册",
		})
		return
	}

	var newUser = model.User{
		Mobile: mobile,
		Code:   code,
	}
	//token, _ := GetToken(mobile, code)
	//claim, _ := ParseToken(token)
	//fmt.Println(claim)

	var tokenState string
	type UserInfo map[string]interface{}
	key := "ok"
	userInfo := make(UserInfo)
	userInfo["mobile"] = mobile
	userInfo["code"] = code
	token := createToken(key, userInfo)

	claims, ok := parseToken(token, key)
	if ok {
		tokenState = "ok"

	}

	err := db.Select("Mobile", "Code").Create(&newUser).Error
	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"msg": "注册失败！",
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"msg":    "注册成功",
			"data":   token,
			"token":  newUser,
			"mobile": mobile,
			"code":   code,

			token: newUser,
		})
	}
	fmt.Println(tokenState)
	fmt.Println(claims)
	fmt.Println(token)
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

	err := db.Select("TombName", "TombText").Create(&newTomb).Error
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

func createToken(key string, m map[string]interface{}) string {
	token := jwt.New(jwt.SigningMethodHS256)
	claims := make(jwt.MapClaims)

	for index, val := range m {
		claims[index] = val
	}
	// fmt.Println(_map)
	token.Claims = claims
	tokenString, _ := token.SignedString([]byte(key))
	return tokenString
}

func parseToken(tokenString string, key string) (interface{}, bool) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(key), nil
	})
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims, true
	} else {
		fmt.Println(err)
		return "", false
	}
}
