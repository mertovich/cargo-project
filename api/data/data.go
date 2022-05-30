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
		ioutil.WriteFile("../../data/data.json", jsonData, 0644)
	}
	return true
}

func GetCargoID(id string) models.Cargo {
	cargo := models.Cargo{}
	tmpData := GetAllData()
	for _, v := range tmpData {
		if v.ID == id {
			cargo = v
		}
	}
	return cargo
}

func CargoDelete(id string) {
	data := GetAllData()
	tmpData := []models.Cargo{}
	for _, v := range data {
		if v.ID != id {
			tmpData = append(tmpData, v)
		}
	}
	// write to file
	jsonData, err := json.Marshal(tmpData)
	if err != nil {
		panic(err)
	} else {
		ioutil.WriteFile("../../data/data.json", jsonData, 0644)
	}
}

func CargoUpdateLocation(id string, location string) bool {
	cargo := GetCargoID(id)
	CargoDelete(id)
	cargo.Location = location
	return SaveData(cargo)
}
