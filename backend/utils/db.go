package utils

import (
	"Login/model"
	_ "github.com/go-sql-driver/mysql"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Init() *gorm.DB {
	db, err := gorm.Open(mysql.Open("root:wh86005806@tcp(47.98.44.140:3306)/test?charset=utf8&parseTime=true&loc=Local"), &gorm.Config{})
	if err != nil {
		panic("连接失败" + err.Error())
	}

	db.AutoMigrate(&model.User{})
	db.AutoMigrate(&model.Tomb{})
	db.AutoMigrate(&model.UserTomb{})

	DB = db
	return db
}

func GetDB() *gorm.DB {
	return DB

}
