package model

import "github.com/dgrijalva/jwt-go"

type User struct {
	ID     int    `json:"id"`
	Mobile string `json:"mobile"`
	Code   string `json:"code"`
	jwt.StandardClaims
}

type Tomb struct {
	ID        int    `json:"id"`
	TombText  string `json:"tombText"`
	TombName  string `json:"tombName"`
	IsApple   bool   `json:"isApple"`
	IsPear    bool   `json:"isPear"`
	IsWine    bool   `json:"isWine"`
	IsBurn    bool   `json:"isBurn"`
	IsFlower  bool   `json:"isFlower"`
	TombStyle int    `json:"style"`
}

type UserTomb struct {
	ID           int `json:"id"`
	UserFirstId  int `json:"userFirstId"`
	UserSecondId int `json:"userSecondId"`
	UserThirdId  int `json:"userThirdId"`
}
