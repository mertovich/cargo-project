package data

import (
	"api/models"
	"encoding/json"
	"io/ioutil"
)

func GetAllData() []models.Cargo {
	jsonFile, err := ioutil.ReadFile("../../data/data.json")
	if err != nil {
		panic(err)
	}
	return models.ParseCargo(jsonFile)
}

func SaveData(cargo models.Cargo) bool {
	data := GetAllData()
	data = append(data, cargo)
	jsonData, err := json.Marshal(data)
	if err != nil {
		return false
	} else {
		ioutil.WriteFile("data/data.json", jsonData, 0644)
	}
	return true
}
