package data

import (
	"api/model"
	"encoding/json"
	"io/ioutil"
)

func GetData() []model.Cargo {
	jsonFile, err := ioutil.ReadFile("data/data.json")
	if err != nil {
		panic(err)
	}
	return model.ParseCargo(jsonFile)
}

func SaveData(cargo model.Cargo) bool {
	data := GetData()
	data = append(data, cargo)
	jsonData, err := json.Marshal(data)
	if err != nil {
		return false
	} else {
		ioutil.WriteFile("data/data.json", jsonData, 0644)
	}
	return true
}
